import BuildStatus from 'typings/buildStatus';

export enum InternalBuildStatus {
  waiting = 'waiting',
  running = 'running',
  success = 'success',
  failed = 'failed',
  cancelled = 'cancelled',
}

export type GetBuildStatusFn = (status: BuildStatus) => InternalBuildStatus;

export const getBuildStatus: GetBuildStatusFn = status =>
  ({
    [BuildStatus.Waiting]: InternalBuildStatus.waiting,
    [BuildStatus.InProgress]: InternalBuildStatus.running,
    [BuildStatus.Success]: InternalBuildStatus.success,
    [BuildStatus.Fail]: InternalBuildStatus.failed,
    [BuildStatus.Canceled]: InternalBuildStatus.cancelled,
  }[status]);
