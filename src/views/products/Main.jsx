import { Lucide, TomSelect, Tippy } from "@/base-components";
 
import * as $_ from "lodash";
import { useState } from "react";

function Main() {
  const [categories, setCategories] = useState([
    "Photography",
    "christianbale@left4code.com",
    "angelinajolie@left4code.com",
    "brucewillis@left4code.com",
    "nicolascage@left4code.com",
  ]);

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Products</h2>
        <div className="w-full sm:w-auto flex flex-wrap gap-y-3 mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">
            <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Product
          </button>
          <button className="btn box">
            <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Download Report
          </button>
        </div>
      </div>
      {/* BEGIN: Filter */}
      <div className="intro-y box p-5 mt-7 flex flex-col xl:flex-row gap-y-3">
        <div className="form-inline flex-1 flex-col xl:flex-row items-start xl:items-center gap-y-2 xl:mr-6">
          <label htmlFor="crud-form-1" className="form-label">
            Product Name
          </label>
          <input
            id="crud-form-1"
            type="text"
            className="form-control w-full"
            placeholder="Product name.."
          />
        </div>
        <div className="form-inline flex-1 flex-col xl:flex-row items-start xl:items-center gap-y-2 xl:mr-6">
          <label htmlFor="crud-form-2" className="form-label">
            Category
          </label>
          <TomSelect
            id="crud-form-2"
            value={categories}
            onChange={setCategories}
            className="w-full flex-1"
            multiple
          >
            {$f().map((faker, fakerKey) => (
              <option key={fakerKey} value={faker.products[0].category}>
                {faker.products[0].category}
              </option>
            ))}
          </TomSelect>
        </div>
        <div className="form-inline flex-1 flex-col xl:flex-row items-start xl:items-center gap-y-2 xl:mr-6">
          <label htmlFor="crud-form-1" className="form-label">
            Status
          </label>
          <select
            className="form-select w-full"
            aria-label="Default select example"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        <button className="btn btn-primary shadow-md">
          <Lucide icon="Search" className="w-4 h-4 mr-2" /> Filter
        </button>
      </div>
      {/* END: Filter */}
      {/* BEGIN: Data List */}
      <div className="intro-y overflow-auto lg:overflow-visible">
        <table className="table table-report">
          <tbody>
            {$_.take($f(), 9).map((faker, fakerKey) => (
              <tr key={fakerKey} className="intro-x">
                <td className="w-40 !py-5">
                  <div className="flex">
                    <div className="w-10 h-10 image-fit zoom-in">
                      <Tippy
                        tag="img"
                        alt="Rocketman - HTML Admin Template"
                        className="rounded-full"
                        src={faker.images[0]}
                        content={`Uploaded at ${faker.dates[0]}`}
                      />
                    </div>
                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                      <Tippy
                        tag="img"
                        alt="Rocketman - HTML Admin Template"
                        className="rounded-full"
                        src={faker.images[1]}
                        content={`Uploaded at ${faker.dates[0]}`}
                      />
                    </div>
                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                      <Tippy
                        tag="img"
                        alt="Rocketman - HTML Admin Template"
                        className="rounded-full"
                        src={faker.images[2]}
                        content={`Uploaded at ${faker.dates[0]}`}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <a href="" className="font-medium whitespace-nowrap">
                    {faker.products[0].name}
                  </a>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    {faker.products[0].category}
                  </div>
                </td>
                <td className="text-center">{faker.products[0].price}</td>
                <td className="text-center">{faker.stocks[0]}</td>
                <td className="w-40">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input mx-auto"
                      type="checkbox"
                      checked={faker.trueFalse[0]}
                      onChange={() => {}}
                    />
                  </div>
                </td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <a className="flex items-center mr-3" href="#">
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" />{" "}
                      Edit
                    </a>
                    <a
                      className="flex items-center text-danger"
                      href="#"
                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* END: Data List */}
      {/* BEGIN: Pagination */}
      <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-5 mb-12">
        <nav className="w-full sm:w-auto sm:mr-auto">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                <Lucide icon="ChevronsLeft" className="w-4 h-4" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <Lucide icon="ChevronLeft" className="w-4 h-4" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <Lucide icon="ChevronRight" className="w-4 h-4" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <Lucide icon="ChevronsRight" className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </nav>
        <select className="w-20 form-select box mt-3 sm:mt-0">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </select>
      </div>
      {/* END: Pagination */}
    </>
  );
}

export default Main;
