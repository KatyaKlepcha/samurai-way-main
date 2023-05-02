import React from 'react';
import s from "./Paginator.module.css";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}

const Paginator = (props: PropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pagesWrapper}>
            {pages.map((p, i) => {
                return <span key={i} onClick={() => props.onPageChanged(p)}
                             className={props.currentPage === p ? s.currentPage + ' ' + s.pages : s.pages}>{p}</span>
            })}
        </div>
    );
};

export default Paginator;