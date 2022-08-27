import React, { useState, useEffect } from "react";
import './ExperienceTable.css';
import useFetch from "../hooks/useFetch";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import Table from "../Table/Table";
import ReactPaginate from "react-paginate";

const ExperiencesTable = () => {
    const [page, setPage] = useState(0);
    const { data, isLoading, fetchData } = useFetch(`/api/products?page=${page}`); 
    const header = ['ID', 'Nombre', 'Descripcion', 'Categoria'];

    useEffect(() => {
        fetchData();
        console.log(page);
    }, [page])

    const changePage = ({ selected }) => {
        setPage(selected);
    }

    const showTable = () => {
        return(
            <div className="table-container">
                {data && data.experiences.length > 0  && <Table header={header} data={data} />}
                <ReactPaginate 
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    pageCount={data && data.pages}
                    onPageChange={changePage}
                    containerClassName={'pagination-container'}
                    previousLinkClassName={'previos-btn'}
                    nextLinkClassName={'next-btn'}
                    disabledClassName={'disabled-btn'}
                    activeClassName={'active-btn'}
                />
            </div>
        );
    }

    return(
        <div className="container">
            { isLoading ? <LoaderSpinner /> : showTable() }
        </div>
    );
}

export default ExperiencesTable;