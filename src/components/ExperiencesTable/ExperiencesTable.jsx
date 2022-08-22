import React, { useState, useEffect } from "react";
import './ExperienceTable.css';
import useFetch from "../hooks/useFetch";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

const ExperiencesTable = () => {
    const { data, isLoading } = useFetch("/api/products?page=1", 'experiences'); 

    const showTable = () => {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0  && data.map((exp, index) => {
                        return(
                            <tr key={index}>
                                <td>{exp.id}</td>
                                <td>{exp.name}</td>
                                <td>{exp.description}</td>
                                <td>{exp.category.category_name}</td>
                            </tr>
                        );}) 
                    }
                </tbody>
            </table>
        );
    }

    return(
        <div className="table-container">
            {isLoading ? <LoaderSpinner /> : 
                showTable()
            }
        </div>
    );
}

export default ExperiencesTable;