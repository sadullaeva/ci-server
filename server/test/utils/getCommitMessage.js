const { expect } = require('chai');
const sinon = require('sinon');

const child_process = require('../../utils/childProcess');

const getCommitMessage = require('../../utils/getCommitMessage');

const commitMessage = 'Commit message';
const sandbox = sinon.createSandbox();

beforeEach(() => {
  sandbox.stub(child_process, 'exec').resolves({ stdout: commitMessage });
});

afterEach(() => {
  sandbox.restore();
});

describe('getCommitMessage', () => {
  it('gets commit message from git log', async () => {
    const commitHash = '1q2w3e4';

    const result = await getCommitMessage(commitHash);

    expect(result).to.equal(commitMessage);
  });
});
