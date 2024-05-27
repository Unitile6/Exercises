import { Fragment } from 'react';
import './Oefening.css';
import classNames from 'classnames';

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  return <div className="max-w-md w-full shadow border border-slate-200 p-4 grid gap-4">
  <Grade name="English" grade={8} />
  <Grade name="Math" grade={6} />
  <Grade name="History" grade={9} />
  <Grade name="Arts" grade={4} />
  <Grade name="Biology" grade={6} />
  <Grade name="Physics" grade={3} />
  <Grade name="Spanish" grade={5} />
</div>


}

type Props = {
  name: string;
  grade: number;
}

export function Grade({name,grade}: Props){
  const passed = grade > 5
    return (<div>
    <span className="flex justify-between w-full pb-4 border-b-2 last:border-none">{name}</span>
    <span className="m-0 border-p-2 text-black">{passed ? "passed" : "failed"}</span> {'  '}
      <span className={classNames(
        "font-bold",
        passed ? "text-green-500" : "text-red-500")

      }>{grade}</span>
    </div>)
}
