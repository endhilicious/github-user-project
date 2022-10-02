import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import RepoLists from '../components/RepoLists'

const GithubUserView = () => {
    return (
        <div className='GithubUserView__wrapper'>
            <Header />
            <div className='GithubUserView__repoListWrapper'>
                <RepoLists />
            </div>
            <Footer />
        </div>
    )
}

export default GithubUserView