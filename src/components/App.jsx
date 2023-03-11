import React from 'react';
import FriendList from 'components/FriendList/FriendList';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import userData from 'components/json/user.json';
import data from 'components/json/data.json';
import friendData from 'components/json/friends.json';
import transactionData from 'components/json/transactions';

const App = () => {
  return (
    <>
      <Profile data={userData} />,
      <Statistics title="Upload stats" stats={data} />,
      <FriendList friends={friendData} />,
      <TransactionHistory items={transactionData} />
    </>
  );
};

export default App;
