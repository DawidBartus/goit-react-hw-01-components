import React from 'react';
import FriendList from 'components/FriendList/FriendList';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import userData from 'data/user.json';
import data from 'data/data.json';
import friendData from 'data/friends.json';
import transactionData from 'data/transactions.json';

const App = () => {
  return (
    <>
      <Profile data={userData} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendData} />
      <TransactionHistory items={transactionData} />
    </>
  );
};

export default App;
