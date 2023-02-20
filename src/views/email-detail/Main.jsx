import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownDivider,
} from "@/base-components";
 

function Main() {
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
            <a
              href=""
              className="flex items-center px-3 py-2 rounded-md bg-primary dark:bg-darkmode-800 font-medium text-white"
            >
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
        <div className="col-span-12 xl:col-span-8 2xl:col-span-10 p-5">
          <div className="flex flex-wrap gap-y-5 items-center">
            <h2 className="text-2xl font-medium mr-auto">
              {$f()[0].news[0].title}
            </h2>
            <div className="flex items-center">
              <div className="">March 25, 09:29</div>
              <a
                href="#"
                className="w-5 h-5 ml-5 flex items-center justify-center"
              >
                <Lucide icon="Settings" className="w-4 h-4" />
              </a>
              <Dropdown>
                <DropdownToggle className="w-5 h-5 ml-5 flex items-center justify-center">
                  <Lucide icon="CornerUpRight" className="w-4 h-4" />
                </DropdownToggle>
                <DropdownMenu className="w-40">
                  <DropdownContent>
                    <DropdownItem>
                      <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Reply to
                      all
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Forward
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>
                      <Lucide icon="Archive" className="w-4 h-4 mr-2" /> Report
                      spam
                    </DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
              <a
                href="#"
                className="w-5 h-5 ml-5 flex items-center justify-center"
              >
                <Lucide icon="ChevronLeft" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-5 h-5 ml-5 flex items-center justify-center"
              >
                <Lucide icon="ChevronRight" className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex items-center mt-5">
            <div className="w-9 h-9 flex-none image-fit relative">
              <img
                alt="Rocketman - HTML Admin Template"
                className="rounded-full"
                src={$f()[0].photos[0]}
              />
            </div>
            <div className="ml-3 mr-auto">
              <div className="flex items-center flex-wrap gap-y-1">
                <div className="font-medium mr-2">{$f()[0].users[0].name}</div>
                <div className="text-xs text-slate-500">
                  {$f()[0].users[0].email}
                </div>
              </div>
              <Dropdown placement="bottom-start">
                <DropdownToggle className="flex items-center text-xs text-slate-500 mt-0.5">
                  to me <Lucide icon="ChevronDown" className="w-4 h-4 ml-0.5" />
                </DropdownToggle>
                <DropdownMenu className="w-40">
                  <DropdownContent>
                    <DropdownItem>
                      <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Mark as
                      read
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Mark as
                      unread
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Archive" className="w-4 h-4 mr-2" /> Move to
                      spam
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>
                      <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Move to
                      trash
                    </DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="mt-10">
            <p className="mt-5">Hi {$f()[0].users[1].name},</p>
            <p className="mt-5">{$f()[1].news[0].content}</p>
            <p className="mt-5">{$f()[2].news[0].content}</p>
            <p className="mt-5">{$f()[3].news[0].content}</p>
            <p className="mt-5">{$f()[4].news[0].content}</p>
            <p className="mt-5">
              Regards, <br />
              {$f()[0].users[0].name}
            </p>
          </div>
          <div className="mt-10 pb-16">
            <div className="flex flex-wrap gap-y-2 mb-5">
              <div className="mr-auto font-medium">
                Attachments (2 files, 200,05 MB)
              </div>
              <div className="flex">
                <a href="#" className="text-primary w-24">
                  View All
                </a>
                <a href="#" className="text-primary w-24 ml-2">
                  Download All
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-y-2 mt-3">
              <div className="mr-auto flex items-center">
                <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                annual-report-2022.pdf (180.05 MB)
              </div>
              <div className="flex">
                <a href="#" className="text-primary w-24">
                  View
                </a>
                <a href="#" className="text-primary w-24 ml-2">
                  Download
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-y-2 mt-3">
              <div className="mr-auto flex items-center">
                <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                weekly-report-2022.pdf (20 MB)
              </div>
              <div className="flex">
                <a href="#" className="text-primary w-24">
                  View
                </a>
                <a href="#" className="text-primary w-24 ml-2">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* END: Inbox Content */}
      </div>
    </>
  );
}

export default Main;
