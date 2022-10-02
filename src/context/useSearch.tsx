import React, { createContext, useState } from 'react';

import { Octokit } from '@octokit/core';
import { GITHUB_TOKEN } from '../utils/constants';

export const SearchContext = createContext(null);

export default function useSearch(props: any): any {
    console.log('props', props); // remove later

    const [user, setUser] = useState({});
    const [listRepo, setListRepo] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getUser = async (user: string) => {
        setLoading(true);
        try {
            const octokit = new Octokit({
                auth: GITHUB_TOKEN
            })
            const result = await octokit.request(`GET /users/${user}`, {})
            if (result.status < 400 && result.status >= 200) {
                setUser(result?.data || {});
                getRepos(user);
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.log('error', error);
            setLoading(false);
        }
    }

    const getRepos = async (user: string) => {
        try {
            const octokit = new Octokit({
                auth: GITHUB_TOKEN
            })
            const result = await octokit.request(`GET /users/${user}/repos`, {
                per_page: 10
            })
            if (result.status < 400 && result.status >= 200) {
                setListRepo(result?.data || []);
            }
        } catch (error) {
            console.log('error', error);
        } finally {
            setLoading(false);
        }
    }
    
    return {
        isLoading,
        user,
        listRepo,
        getUser,
        getRepos
    };
}

interface SearchProviderPros {
    children: React.ReactNode;
    search?: any;
}

export const SearchProvider: React.FC<SearchProviderPros> = ({ children, ...props }) => {
    return (
        <SearchContext.Provider value={useSearch(props)}>
            {children}
        </SearchContext.Provider>
    );
};
