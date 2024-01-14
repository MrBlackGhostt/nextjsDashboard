import { useState, useEffect } from 'react'
import { Field, Form, Formik } from 'formik'
import dynamic from 'next/dynamic'

const DynamicQuillComponent = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading Client Table...</p>,
  ssr: false,
})

const NewClient = () => {
  const [value, setValue] = useState('')
  const [shouldRenderQuill, setShouldRenderQuill] = useState(false)
  useEffect(() => {
    setShouldRenderQuill(true) // This w
  }, [])
  return (
    <>
      <div className="py-0 bg-gray-300">
        <div className="bg-gray-300 rounded-full shadow-lg p-8">
          <h1 className="text-2xl font-semibold mb-6">New Client</h1>
          <Formik
            initialValues={{}}
            onSubmit={(values) => {
              // Handle form submission here
              console.log(values)
            }}
          >
            {({ values }) => (
              <Form>
                <div className="grid md:grid-cols-2 gap-6 grid-cols-1 py-5">
                  <div>
                    <label className="font-semibold" htmlFor="companyName">
                      Company Name
                    </label>
                    <Field
                      id="companyName"
                      name="companyName"
                      placeholder="Enter Company Name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="companyEmail">
                      Company Email
                    </label>
                    <Field
                      id="companyEmail"
                      name="companyEmail"
                      placeholder="Enter Company Email"
                      type="Email"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="companyVat">
                      Company Vat
                    </label>
                    <Field
                      id="companyVat"
                      name="companyVat"
                      placeholder="Enter Company Vat"
                      type="Number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="customerGroup">
                      Customer Group
                    </label>
                    <Field
                      id="customerGroup"
                      name="customerGroup"
                      placeholder="Enter Customer Group"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="language">
                      Language
                    </label>
                    <Field
                      id="language"
                      name="language"
                      placeholder="Enter Language"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="currency">
                      currency
                    </label>
                    <Field
                      id="currency"
                      name="currency"
                      placeholder="Enter currency"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="shortNote">
                      Short Note
                    </label>
                    {shouldRenderQuill && (
                      <DynamicQuillComponent
                        onChange={setValue}
                        className="w-full md:w-[200%] block border bg-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      />
                    )}
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  >
                    New Client
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default NewClient
