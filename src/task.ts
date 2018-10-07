type Matcher<T, E, A> = {
  Resolved: (value: T) => A;
  Rejected: (error: E) => A;
};

interface ITask<T, E> {
  toPromise(): Promise<T>;
  fromPromise(promise: Promise<T>): Task<T, E>;

  // TODO: is this right? Given how the value is wrapped up, does it make sense
  // for it to be able to return anything but a `Task` or `Promise`? :thinking:
  match<A>(matcher: Matcher<T, E, A>): A;
}

class Resolved<T, E> implements ITask<T, E> {
  constructor(private value: T) {}

  toPromise() {}
}

class Rejected<T, E> implements ITask<T, E> {
  constructor(private error: E) {}
}

function toPromise<T, E>(task: Task<T, E>): Promise<T> {
  return new Promise((resolve, reject) => {
    task.match({
      Resolved: resolve,
      Rejected: reject,
    });
  });
}

type Task<T, E> = Resolved<T, E> | Rejected<T, E>;
