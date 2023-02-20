import { Lucide } from "@/base-components";
import { ClassicEditor, TomSelect } from "@/base-components";
 
import { useState } from "react";

function Main() {
  const [to, setTo] = useState([
    "johnnydepp@left4code.com",
    "christianbale@left4code.com",
    "angelinajolie@left4code.com",
    "brucewillis@left4code.com",
    "nicolascage@left4code.com",
  ]);
  const [cc, setCc] = useState([]);
  const editorConfig = {
    toolbar: {
      items: ["bold", "italic", "link"],
    },
  };
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Inbox</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">
            <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Compose New Mail
          </button>
          <button className="btn box">
            <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
          </button>
        </div>
      </div>
      <div className="box grid grid-cols-12 mt-5">
        {/* BEGIN: Inbox Side Menu */}
        <div className="col-span-12 xl:col-span-4 2xl:col-span-2 border-b xl:border-r border-slate-200/60 bg-slate-50 dark:bg-darkmode-600 p-5 rounded-l-md">
          <div>
            <a href="" className="flex items-center px-3 py-2 rounded-md">
              <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Inbox
            </a>
            <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
              <Lucide icon="Star" className="w-4 h-4 mr-2" /> Marked
            </a>
            <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
              <Lucide icon="Inbox" className="w-4 h-4 mr-2" /> Draft
            </a>
            <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
              <Lucide icon="Send" className="w-4 h-4 mr-2" /> Sent
            </a>
            <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
              <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Trash
            </a>
          </div>
          <div className="border-t border-slate-400/20 dark:border-darkmode-400 mt-4 pt-4">
            <a href="" className="flex items-center px-3 py-2 truncate">
              <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
              Custom Work
            </a>
            <a
              href=""
              className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
            >
              <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
              Important Meetings
            </a>
            <a
              href=""
              className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
            >
              <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
              Work
            </a>
            <a
              href=""
              className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
            >
              <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
              Design
            </a>
            <a
              href=""
              className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
            >
              <div className="w-2 h-2 bg-danger rounded-full mr-3"></div>
              Next Week
            </a>
            <a
              href=""
              className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
            >
              <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Label
            </a>
          </div>
        </div>
        {/* END: Inbox Side Menu */}
        {/* BEGIN: Inbox Content */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-10 p-5 pb-16">
          <div className="form-inline flex-col 2xl:flex-row gap-y-3 items-start 2xl:items-center">
            <label
              htmlFor="to"
              className="form-label sm:w-20 !text-left 2xl:!text-right"
            >
              To
            </label>
            <TomSelect
              id="to"
              value={to}
              onChange={setTo}
              className="w-full flex-1"
              multiple
            >
               
            </TomSelect>
          </div>
          <div className="form-inline flex-col 2xl:flex-row gap-y-3 items-start 2xl:items-center mt-5">
            <label
              htmlFor="cc"
              className="form-label sm:w-20 !text-left 2xl:!text-right"
            >
              Cc
            </label>
            <TomSelect
              id="cc"
              value={cc}
              onChange={setCc}
              className="w-full flex-1"
              multiple
            >
              
            </TomSelect>
          </div>
          <div className="form-inline flex-col 2xl:flex-row gap-y-3 items-start 2xl:items-center mt-5">
            <label
              htmlFor="mail"
              className="form-label sm:w-20 !text-left 2xl:!text-right"
            >
              Subject
            </label>
            <input id="mail" type="text" className="form-control" />
          </div>
          <div className="form-inline flex-col 2xl:flex-row gap-y-3 items-start 2xl:items-center mt-5">
            <label className="form-label sm:w-20 !text-left 2xl:!text-right">
              Mail
            </label>
            <div className="w-full flex-1">
              <ClassicEditor
                value={editorData}
                onChange={setEditorData}
                config={editorConfig}
              />
            </div>
          </div>
          <div className="mt-5 2xl:ml-20 2xl:pl-5">
            <button type="button" className="btn btn-primary w-24 mr-1">
              Send
            </button>
            <button type="button" className="btn btn-outline-secondary w-24">
              Cancel
            </button>
          </div>
        </div>
        {/* END: Inbox Content */}
      </div>
    </>
  );
}

export default Main;
