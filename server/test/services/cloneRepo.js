const { expect } = require('chai');
const sinon = require('sinon');

const child_process = require('../../utils/childProcess');

const cloneRepo = require('../../services/cloneRepo');

const sandbox = sinon.createSandbox();

beforeEach(() => {
  sandbox.stub(child_process, 'exec').resolves();
  sandbox.stub(child_process, 'spawn').resolves();
});

afterEach(() => {
  sandbox.restore();
});

describe('cloneRepo', () => {
  it('removes old copy of repo and clones a new one', () => {
    const repoName = 'sadullaeva/shri-2020-task-2';
    const mainBranch = 'master';

    const result = async () => {
      await cloneRepo(repoName, mainBranch);
    };

    expect(result).to.not.throw();
  });
});
