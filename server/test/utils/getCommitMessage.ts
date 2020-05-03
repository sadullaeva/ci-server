import { expect } from 'chai';
import sinon from 'sinon';

import * as child_process from '../../utils/childProcess';

import getCommitMessage from '../../utils/getCommitMessage';

const commitMessage = 'Commit message';

describe('getCommitMessage', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.stub(child_process, 'exec').resolves({ stdout: commitMessage, stderr: '' });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('gets commit message from git log', async () => {
    const commitHash = '1q2w3e4';

    const result = await getCommitMessage(commitHash);

    expect(result).to.equal(commitMessage);
  });
});
