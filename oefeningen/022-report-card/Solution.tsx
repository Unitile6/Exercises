import classNames from 'classnames';

export function Oefening() {
  return (
    <div className="max-w-md w-full shadow border border-slate-200 p-4 grid gap-4">
      <Grade name="English" grade={8} />
      <Grade name="Math" grade={6} />
      <Grade name="History" grade={9} />
      <Grade name="Arts" grade={4} />
      <Grade name="Biology" grade={6} />
      <Grade name="Physics" grade={3} />
      <Grade name="Spanish" grade={5} />
    </div>
  );
}

type Props = {
  name: string;
  grade: number;
};

export function Grade({ name, grade }: Props) {
  const passed = grade > 5;

  return (
    <div className="flex justify-between w-full pb-4 border-b-2 last:border-none">
      <span>
        {name} <em>{passed ? '(passed)' : '(failed)'}</em>
      </span>{' '}
      <span
        className={classNames(
          'font-bold',
          passed ? 'text-green-600' : 'text-red-600'
        )}
      >
        {grade}
      </span>
    </div>
  );
}
