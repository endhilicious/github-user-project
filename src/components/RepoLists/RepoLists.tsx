import React, { useContext } from 'react'
import { SearchContext } from '../../context/useSearch';
import Card from '../Common/Card';
import Loader from '../Common/Loader';

const DEFAULT_PHOTO = 'https://unsplash.com/photos/2TS23o0-pUc';

const RepoLists = () => {
    const { isLoading, listRepo, user }: any = useContext(SearchContext);

    if (isLoading)
        return <Loader />;

    return (
        <>
            {Object.keys(user).length > 0 && (
                <div className='RepoLists__accountWrapper'>
                    <div className="RepoLists__imageWrapper">
                        <img src={user.avatar_url || DEFAULT_PHOTO} alt='RepoLists__altImage' />
                    </div>
                    <div className='RepoLists__descWrapper'>
                        <div>
                            <div>
                                <b>Name :</b>
                            </div>
                            <div>{user.name}</div>
                        </div>
                        <div>
                            <div>
                                <b>Username :</b>
                            </div>
                            <div>{user.login}</div>
                        </div>
                        <div>
                            <div>
                                <b>Followers :</b>
                            </div>
                            <div>{user.followers}</div>
                        </div>
                        <div>
                            <div>
                                <b>Following :</b>
                            </div>
                            <div>{user.following}</div>
                        </div>
                        <div>
                            <div>
                                <b>Collaborators :</b>
                            </div>
                            <div>{user.collaborators}</div>
                        </div>
                    </div>
                </div>
            )}
            <div className="RepoLists__listRepoWrapper">
                {listRepo.length > 0 ?
                    listRepo.map(
                        (data: any) => (
                            <div key={data.id} className='RepoLists__listCardWrapper'>
                                <Card data={data} />
                            </div>
                        )
                    ) : (
                        <div className='RepoLists__listCardEmpty'>
                            {Object.keys(user).length > 0 ? (
                                <div className='RepoLists__noRepoFound'>No Repo Found</div>
                            ) : (
                                <div className='RepoLists__letsSearchUser'>Let's Search User</div>
                            )}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default RepoLists