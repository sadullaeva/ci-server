const { expect } = require('chai');
const sinon = require('sinon');

const child_process = require('../../utils/childProcess');

const getCommitAuthorName = require('../../utils/getCommitAuthorName');

const authorName = 'Commit message';

describe('getCommitAuthorName', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.stub(child_process, 'exec').resolves({ stdout: authorName });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('gets commit author name from git log', async () => {
    const commitHash = '1q2w3e4';

    const result = await getCommitAuthorName(commitHash);

    expect(result).to.equal(authorName);
  });
});
