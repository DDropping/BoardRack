import React from 'react';

const Test = () => {
  return (
    <div>
      <form method="post" enctype="multipart/form-data" action="/upload">
        <label for="file">Upload a file</label>
        <input type="file" name="upload" />
        <input type="submit" class="button" />
      </form>
    </div>
  );
};

export default Test;
