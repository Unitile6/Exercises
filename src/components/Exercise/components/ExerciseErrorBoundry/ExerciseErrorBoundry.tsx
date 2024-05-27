import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

export class ExerciseErrorBoundry extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    console.log(error);

    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="grid gap-4 text-lg px-4">
          <div className="bg-red-400 p-4 text-white ">
            <FontAwesomeIcon icon={faWarning} className="mr-2" />
            Er is iets mis met je code, los het probleem op.
          </div>

          {this.state.error ? (
            <>
              <b>De foutmelding die voorkwam:</b>
              <code>{this.state.error.name}: {this.state.error.message}</code>
              <b>Stacktrace:</b>
              <pre className='w-full overflow-auto'>{this.state.error.stack}</pre>
            </>
          ) : null}
        </div>
      );
    }

    return this.props.children;
  }
}
