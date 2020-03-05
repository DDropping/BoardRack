import React, { useEffect } from 'react';

const AccountOverview = () => {
  useEffect(() => {
    document.title = 'BoardRack | Account';
  }, []);

  return (
    <div>
      <div>Account Overview Page</div>
    </div>
  );
};

export default AccountOverview;
