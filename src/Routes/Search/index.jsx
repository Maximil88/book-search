import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from '../../components/modal/modal';
import { connect } from 'react-redux';
import { executeSearch } from '../../Redux/Actions/actions';
import './Style.css';

function Search({executeSearch, results}) {

    const createListOfBooks = books => {
        const listOfBooks = books.map((book, index) => {
            return <li data-bookId={book.key} key={index}>{book.title}</li>;
        });
        return listOfBooks;
    }

    const [ fieldData, setFieldData ] = useState({
        author: null,
        title: null
    });

    const [listOfBooks, setListOfBooks] = useState('');

    // TODO refactor this later because we have two responses
    const [response, setResponse] = useState(null);
    const [bookDescription, setBookDescription] = useState(null);

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
        console.log(dataCopy);
        setFieldData(dataCopy);
    };

   

    const handleSubmit = e => {
        e.preventDefault();
        executeSearch(fieldData.author, fieldData.title);
    }

    const handleClick = e => {
        const bookId = e.target.getAttribute('data-bookId');
        // console.log(bookId)
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
