import { useState, useRef } from "react";
import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownDivider,
  Modal,
  ModalBody,
} from "@/base-components";
 
import dom from "@left4code/tw-starter/dist/js/dom";
import * as $_ from "lodash";
import classnames from "classnames";
import PropTypes from "prop-types";

function Main(props) {
  const [searchResultModal, setSearchResultModal] = useState(false);
  const searchInput = useRef(false);

  // Show search result modal
  const showSearchResultModal = () => {
    setSearchResultModal(true);
  };

  // Set search input focus
  const setSearchInputFocus = () => {
    searchInput.current.focus();
  };

  // On press event (Ctrl+k)
  dom("body").on("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.which == 75) {
      setSearchResultModal(true);
    }
  });

  return (
    <>
      {/* BEGIN: Top Bar */}
      <div className="top-bar">
        {/* BEGIN: Breadcrumb */}
        <nav aria-label="breadcrumb" className="-intro-x hidden xl:flex">
          <ol className="breadcrumb breadcrumb-light">
            <li className="breadcrumb-item">
              <a href="#">App</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Administrator</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
        {/* END: Breadcrumb */}
        {/* BEGIN: Mobile Menu */}
        <div className="-intro-x xl:hidden mr-3 sm:mr-6">
          <div
            className="mobile-menu-toggler cursor-pointer"
            onClick={props.toggleMobileMenu}
          >
            <Lucide
              icon="BarChart2"
              className="mobile-menu-toggler__icon transform rotate-90 dark:text-slate-500"
            />
          </div>
        </div>
        {/* END: Mobile Menu */}
        {/* BEGIN: Search */}
        <div className="intro-x relative ml-auto sm:mx-auto">
          <div className="search hidden sm:block">
            <input
              onClick={showSearchResultModal}
              type="text"
              className="search__input form-control"
              placeholder="Quick Search... (Ctrl+k)"
            />
            <Lucide icon="Search" className="search__icon" />
          </div>
          <a className="notification sm:hidden" href="">
            <Lucide
              icon="Search"
              className="notification__icon dark:text-slate-500 mr-5"
            />
          </a>
        </div>
        {/* END: Search */}
        {/* BEGIN: Search Result */}
        <Modal
          size="modal-lg"
          show={searchResultModal}
          onHidden={() => {
            setSearchResultModal(false);
          }}
          onShown={setSearchInputFocus}
          className="flex items-center justify-center"
        >
          <ModalBody className="p-0">
            <div className="relative border-b border-slate-200/60">
              <Lucide
                icon="Search"
                className="w-5 h-5 absolute inset-y-0 my-auto ml-4 text-slate-500"
              />
              <input
                ref={searchInput}
                type="text"
                className="form-control border-0 shadow-none focus:ring-0 py-5 px-12"
                placeholder="Quick Search..."
              />
              <div className="h-6 text-xs bg-slate-200 text-slate-500 px-2 flex items-center rounded-md absolute inset-y-0 right-0 my-auto mr-4">
                ESC
              </div>
            </div>
            <div className="p-5">
              <div className="font-medium mb-3">Applications</div>
              <div className="mb-5">
                <a href="" className="flex items-center mt-3 first:mt-0">
                  <div className="w-7 h-7 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full">
                    <Lucide icon="Inbox" className="w-3.5 h-3.5" />
                  </div>
                  <div className="ml-3 truncate">Compose New Mail</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs flex justify-end items-center">
                    <Lucide icon="Link" className="w-3.5 h-3.5 mr-2" /> Quick
                    Access
                  </div>
                </a>
                <a href="" className="flex items-center mt-3 first:mt-0">
                  <div className="w-7 h-7 bg-pending/10 text-pending flex items-center justify-center rounded-full">
                    <Lucide icon="Users" className="w-3.5 h-3.5" />
                  </div>
                  <div className="ml-3 truncate">Contacts</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs flex justify-end items-center">
                    <Lucide icon="Link" className="w-3.5 h-3.5 mr-2" /> Quick
                    Access
                  </div>
                </a>
                <a href="" className="flex items-center mt-3 first:mt-0">
                  <div className="w-7 h-7 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full">
                    <Lucide icon="CreditCard" className="w-3.5 h-3.5" />
                  </div>
                  <div className="ml-3 truncate">Product Reports</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs flex justify-end items-center">
                    <Lucide icon="Link" className="w-3.5 h-3.5 mr-2" /> Quick
                    Access
                  </div>
                </a>
              </div>
              <div className="font-medium mb-3">Contacts</div>
              <div className="mb-5">
               
              </div>
              <div className="font-medium mb-3">Products</div>
              <div>
                
              </div>
            </div>
          </ModalBody>
        </Modal>
        {/* END: Search Result */}
        {/* BEGIN: Notifications */}
        <div className="intro-x dropdown mr-5 sm:mr-6">
          <div
            className="dropdown-toggle notification notification--bullet cursor-pointer"
            role="button"
            aria-expanded="false"
            data-tw-toggle="dropdown"
          >
            <Lucide
              icon="Bell"
              className="notification__icon dark:text-slate-500"
            />
          </div>
          <div className="notification-content pt-2 dropdown-menu">
            <div className="notification-content__box dropdown-content">
              <div className="notification-content__title">Notifications</div>
               
            </div>
          </div>
        </div>
        {/* END: Notifications */}
        {/* BEGIN: Notifications */}
        <div className="intro-x mr-auto sm:mr-6">
          <div className="notification cursor-pointer">
            <Lucide
              icon="Inbox"
              className="notification__icon dark:text-slate-500"
            />
          </div>
        </div>
        {/* END: Notifications */}
        {/* BEGIN: Account Menu */}
        <Dropdown className="intro-x text-slate-200 h-10">
          <DropdownToggle
            tag="div"
            role="button"
            className="h-full dropdown-toggle flex items-center"
          >
            <div className="w-10 h-10 image-fit">
              <img
                alt="Rocketman - HTML Admin Template"
                className="rounded-full border-2 border-white border-opacity-10 shadow-lg"
                src={$f()[9].photos[0]}
              />
            </div>
            <div className="hidden md:block ml-3">
              <div className="max-w-[7rem] truncate font-medium">
                {$f()[0]["users"][0]["name"]}
              </div>
              <div className="text-xs text-slate-400">{$f()[0]["jobs"][0]}</div>
            </div>
          </DropdownToggle>
          <DropdownMenu className="w-56">
            <DropdownContent>
              <DropdownItem>
                <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
              </DropdownItem>
              <DropdownItem>
                <Lucide icon="Edit" className="w-4 h-4 mr-2" /> Add Account
              </DropdownItem>
              <DropdownItem>
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
              </DropdownItem>
              <DropdownItem>
                <Lucide icon="HelpCircle" className="w-4 h-4 mr-2" /> Help
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem>
                <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" /> Logout
              </DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </Dropdown>
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
    </>
  );
}

Main.propTypes = {
  toggleMobileMenu: PropTypes.func,
};

export default Main;
