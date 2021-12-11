import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from '../../components/modal/modal';
import { connect } from 'react-redux';
import { executeSearch } from '../../Redux/Actions/actions';
import { createListOfBooks } from '../../utils';
import './Style.css';

function Search({executeSearch, results}) {

    const [bookDescription, setBookDescription] = useState(null);
    const [ fieldData, setFieldData ] = useState({
        author: null,
        title: null
    });
    const [listOfBooks, setListOfBooks] = useState('');

    
    useEffect(() => {
        const listOfBooks = createListOfBooks(results);
        setListOfBooks(listOfBooks)
    }, [results])   

    const handleChange = e => {
        const value = e.target.value;
        const type = e.target.id;
        
        const dataCopy = Object.assign({}, fieldData, {
            ...fieldData,
        });

        if (type === 'author') {
            dataCopy.author = value;
        } else {
           dataCopy.title = value;
        }
    
        setFieldData(dataCopy);
    };

   

    const handleSubmit = e => {
        e.preventDefault();
        executeSearch(fieldData.author, fieldData.title);
    }

    const handleClick = e => {
        const bookId = e.target.getAttribute('data-bookId');
        fetch(`http://openlibrary.org${bookId}.json`)
        .then(result => result.json())
        .then(data => setBookDescription(data.description));
    }


const closeModal = () => {
    setBookDescription(null);
}


return (
    <>
    <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
            <label htmlFor="author">Author</label>
            <input id="author" onChange={handleChange} type="text" />
        </div>
        <div className="form__field">
            <label htmlFor="title">Title</label>
            <input id="title" onChange={handleChange} type="text" />
        </div>
        <button type="submit">Submit</button>
        </form>
        {results.length > 0 && (
            <div className="results"> 
                <h2>Search Results</h2>
                <ul className="results__books" onClick={handleClick}>{listOfBooks}</ul>
            </div>
        )}
        {bookDescription && (
        <Modal description={bookDescription} closeModal={closeModal}/>)}
        <Outlet />
        </>
  );
}

const mapDispatchToProps = {
    executeSearch
}

const mapStateToProps = state => ({
    results: state.searchResults
})


export default connect(mapStateToProps, mapDispatchToProps)(Search);
