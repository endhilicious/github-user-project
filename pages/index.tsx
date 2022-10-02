import React from 'react';
import { GITHUB_TOKEN } from '../src/utils/constants';
import { Octokit } from '@octokit/core';
import GithubUserView from '../src/views/GithubUserView';

const Index: React.FC = () => {
  // const getUser = async () => {
  //   const octokit = new Octokit({
  //     auth: GITHUB_TOKEN
  //   })
    
  //   const result = await octokit.request('GET /users/endhilicious/repos', {
  //     // q: 'endhilicious'
  //   })
  //   console.log('result', result);
  //   return result
  // }
  // React.useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <>
      <GithubUserView />
    </>
  )
}

export default Index;
