export const getBuildStatus = status =>
  ({
    Waiting: 'waiting',
    InProgress: 'running',
    Success: 'success',
    Fail: 'failed',
    Canceled: 'cancelled',
  }[status]);
