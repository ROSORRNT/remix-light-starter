import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node"
import { Form, redirect } from "@remix-run/react"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  let json = Object.fromEntries(data)
  console.log(json);

  return redirect("/");
}

export default function Index() {

  return (
    <div className="p-10">
      <h1 className="text-5xl">Journal de travail</h1>
      <p className="mt-2 text-lg text-gray-400">Apprendre et faire. Mis à jour chaque semaine.</p>

      <div className="my-8 border p-3">
        <p className="italic">
          Créer une note pour la semaine
        </p>

        <Form method="post" className="mt-2">
          <div>
            <div>
              <input type="date" name="date" id="" className="text-gray-500" />
            </div>
            <div className="mt-4 space-x-4">
              <label className="inline-block">
                <input type="radio" className="mr-1" name="type" value="work" />
                Travail
              </label>
              <label className="inline-block">
                <input
                  type="radio"
                  className="mr-1"
                  name="type"
                  value="learning"
                />
                Apprentissage
              </label>
              <label className="inline-block">
                <input
                  type="radio"
                  className="mr-1"
                  name="type"
                  value="interesting-thing"
                />
                Intérêt divers
              </label>
            </div>
          </div>
          <div className="mt-4">
            <textarea
              placeholder="Saisir votre entrée..."
              name="text"
              id=""
              className="w-full text-gray-700"
            />
          </div>
          <div className="mt-2 text-right">
            <button
              type="submit"
              className="bg-blue-500 px-4 py-1 font-semibold text-white"
            >
              Save
            </button>
          </div>
        </Form>
      </div>

      <div className="mt-6 " >
        <p className="font-bold text-lg">Semaine du 21 janvier.</p>
        <div className="mt-3 text-gray-100 space-y-4">
          <div>
            <p>Travail</p>
            <ul className="list-disc ml-8">
              <li>
                Premier item
              </li>
              <li>
                Second item
              </li>
            </ul>
          </div>
          <div >
            <p>Apprentissage</p>
            <ul className="list-disc ml-8">
              <li>
                Premier item
              </li>
              <li>
                Second item
              </li>
            </ul>
          </div>
          <div>
            <p>Intérêts divers</p>
            <ul className="list-disc ml-8">
              <li>
                Premier item
              </li>
              <li>
                Second item
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
