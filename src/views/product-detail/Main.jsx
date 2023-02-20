import {
  Lucide,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@/base-components";
 
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
        <h2 className="flex items-center text-lg font-medium mr-auto">
          Products{" "}
          <Lucide icon="ArrowRight" className="w-4 h-4 mx-2 !stroke-2" />
          {$f()[0].products[0].name}
        </h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">
            <Lucide icon="FileText" className="w-4 h-4 mr-2" /> View Full Report
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Product Detail Side Menu */}
        <div className="col-span-12 2xl:col-span-3">
          <div className="box intro-y p-5">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">
                Product Details
              </div>
              <Lucide icon="Edit" className="w-4 h-4 text-slate-500 ml-auto" />
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Stock-Keeping Unit: INV-33807556
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 text-slate-500 mr-2" />
              Release Date: 24 March 2022
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Clock" className="w-4 h-4 text-slate-500 mr-2" />
              Condition:
              <span className="text-xs text-success bg-success/20 border border-success/20 rounded-md px-1.5 py-0.5 ml-1">
                New
              </span>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Map" className="w-4 h-4 text-slate-500 mr-2" />
              Category:
              <a href="" className="underline decoration-dotted ml-1">
                {$f()[0].products[0].category}
              </a>
            </div>
          </div>
          <div className="box intro-y p-5 mt-5">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">
                Spesification
              </div>
              <Lucide icon="Edit" className="w-4 h-4 text-slate-500 ml-auto" />
            </div>
            <div className="flex items-center">
              <Lucide icon="Calendar" className="w-4 h-4 text-slate-500 mr-2" />
              Brand:{" "}
              <a href="" className="underline decoration-dotted ml-1">
                Apple
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Clock" className="w-4 h-4 text-slate-500 mr-2" />{" "}
              Signal Status: Activated
            </div>
          </div>
          <div className="box intro-y p-5 mt-5">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">Description</div>
              <Lucide icon="Edit" className="w-4 h-4 text-slate-500 ml-auto" />
            </div>
            <div>{$f()[0]["news"][0]["shortContent"]}</div>
          </div>
          <div className="box intro-y p-5 mt-5">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">
                Product Images
              </div>
              <Lucide icon="Edit" className="w-4 h-4 text-slate-500 ml-auto" />
            </div>
            <div className="grid grid-cols-12 gap-2 mt-2">
              <div className="image-fit col-span-3 h-16 cursor-pointer">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={$f()[0].images[0]}
                />
              </div>
              <div className="image-fit col-span-3 h-16 cursor-pointer">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={$f()[0].images[1]}
                />
              </div>
              <div className="image-fit col-span-3 h-16 cursor-pointer">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={$f()[0].images[2]}
                />
              </div>
              <div className="image-fit col-span-3 h-16 cursor-pointer">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={$f()[0].images[3]}
                />
              </div>
              <div className="image-fit col-span-3 h-16 cursor-pointer">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={$f()[0].images[4]}
                />
              </div>
              <div className="image-fit col-span-3 h-16 cursor-pointer">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={$f()[0].images[5]}
                />
              </div>
              <div className="image-fit col-span-3 h-16 cursor-pointer">
                <img
                  alt="Rocketman - HTML Admin Template"
                  className="rounded-md"
                  src={$f()[0].images[6]}
                />
              </div>
            </div>
          </div>
        </div>
        {/* END: Product Detail Side Menu */}
        {/* BEGIN: Product Detail Content */}
        <TabGroup className="col-span-12 2xl:col-span-9">
          <div className="box intro-y p-3">
            <TabList className="nav nav-pills flex-col md:flex-row">
              <Tab
                className="w-full flex items-center justify-center !rounded-lg py-3"
                tag="button"
              >
                <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Active
                Transactions
              </Tab>
              <Tab
                className="w-full flex items-center justify-center !rounded-lg py-3"
                tag="button"
              >
                <Lucide icon="Inbox" className="w-4 h-4 mr-2" /> Transaction
                History
              </Tab>
              <Tab
                className="w-full flex items-center justify-center !rounded-lg py-3"
                tag="button"
              >
                <Lucide icon="HardDrive" className="w-4 h-4 mr-2" /> Stock
                Management
              </Tab>
            </TabList>
          </div>
          <TabPanels>
            <TabPanel>
              <div className="box p-5 intro-y mt-5">
                <div className="flex flex-col xl:flex-row gap-y-3">
                  <div className="form-inline flex-1 flex-col xl:flex-row items-start xl:items-center gap-y-2 xl:mr-6">
                    <label htmlFor="crud-form-1" className="form-label">
                      Invoice
                    </label>
                    <input
                      id="crud-form-1"
                      type="text"
                      className="form-control w-full"
                      placeholder="Invoice.."
                    />
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
                <div className="overflow-auto lg:overflow-visible">
                  <table className="table table-striped mt-5">
                    <thead>
                      <tr>
                        <th className="whitespace-nowrap !py-5">Invoice</th>
                        <th className="whitespace-nowrap">Status</th>
                        <th className="whitespace-nowrap">Buyer Name</th>
                        <th className="whitespace-nowrap">Payment</th>
                        <th className="whitespace-nowrap text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                  </table>
                </div>
              </div>
              {/* BEGIN: Pagination */}
              <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-5 mb-16">
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
            </TabPanel>
          </TabPanels>
        </TabGroup>
        {/* END: Product Detail Content */}
      </div>
    </>
  );
}

export default Main;
