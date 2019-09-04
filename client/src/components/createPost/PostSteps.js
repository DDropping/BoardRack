import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

const PostSteps = () => {
  return (
    <div>
      <Steps
        type="navigation"
        size="small"
        //current={current}
        //onChange={this.onChange}
        //style={stepStyle}
      >
        <Step
          title="Create New Post"
          status="process"
          description="Add the required details"
        />
        <Step
          title="Additional Details"
          status="wait"
          description="The more details, the easier it's to find"
        />
        <Step
          title="Publish"
          status="wait"
          description="Publish your post to the world"
        />
      </Steps>
    </div>
  );
};

export default PostSteps;
