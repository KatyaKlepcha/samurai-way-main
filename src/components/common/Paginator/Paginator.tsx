import React, {FC, useState} from 'react';
import s from "./Paginator.module.css";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    portionSize?: number
}

const Paginator: FC<PropsType> = ({portionSize = 11, ...props}) => {

    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.pagesWrapper}>
            {portionNumber > 1 && <span className={s.arrowButton} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>&laquo;</span>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p, i) => {
                return <span key={i} onClick={() => props.onPageChanged(p)}
                             className={props.currentPage === p ? s.currentPage + ' ' + s.pages : s.pages}>{p}</span>
            })}
            {portionCount > portionNumber && <span className={s.arrowButton} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>&raquo;</span>}
        </div>
    );
};

export default Paginator;