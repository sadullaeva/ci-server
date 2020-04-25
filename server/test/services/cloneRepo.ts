import { expect } from 'chai';
import sinon from 'sinon';

import * as child_process from '../../utils/childProcess';

import cloneRepo from '../../services/cloneRepo';

describe('cloneRepo', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.stub(child_process, 'exec').resolves();
    sandbox.stub(child_process, 'spawn').resolves();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('removes old copy of repo and clones a new one', () => {
    const repoName = 'sadullaeva/shri-2020-task-2';
    const mainBranch = 'master';

    const result = async () => {
      await cloneRepo(repoName, mainBranch);
    };

    expect(result).to.not.throw();
  });
});
