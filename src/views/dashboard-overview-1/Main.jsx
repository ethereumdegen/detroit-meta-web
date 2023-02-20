import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Litepicker,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@/base-components";
 
import * as $_ from "lodash";
import classnames from "classnames";
import ReportBarChart1 from "@/components/report-bar-chart-1/Main";
import ReportLineChart1 from "@/components/report-line-chart-1/Main";
import ReportLineChart2 from "@/components/report-line-chart-2/Main";
import ReportDonutChart1 from "@/components/report-donut-chart-1/Main";
import { useState } from "react";
 
import chromeUrl from "@/assets/images/chrome.png";
import edgeUrl from "@/assets/images/edge.png";
import firefoxUrl from "@/assets/images/firefox.png";
import operaUrl from "@/assets/images/opera.png";
import safariUrl from "@/assets/images/safari.png";

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState();
  const [salesReportFilter, setSalesReportFilter] = useState();
  const salesPerformance = () => {
    return [
      "bg-opacity-60",
      "bg-opacity-40",
      "bg-opacity-30",
      "bg-opacity-20",
      "bg-opacity-10",
    ][$_.random(0, 4)];
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-9">
        <div className="grid grid-cols-12 gap-6">
          {/* BEGIN: General Report */}
          <div className="col-span-12 mt-6">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                General Report
              </h2>
              <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                <Lucide
                  icon="Calendar"
                  className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                />
                <Litepicker
                  value={generalReportFilter}
                  onChange={setGeneralReportFilter}
                  options={{
                    autoApply: false,
                    singleMode: false,
                    numberOfColumns: 2,
                    numberOfMonths: 2,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="form-control sm:w-56 box pl-10"
                />
              </div>
            </div>
            <div className="intro-y report-box mt-12 sm:mt-4">
              <div className="box py-0 xl:py-5 grid grid-cols-12 gap-0 divide-y xl:divide-y-0 divide-x divide-dashed divide-slate-200 dark:divide-white/5">
                <div className="report-box__item py-5 xl:py-0 px-5 col-span-12 sm:col-span-6 xl:col-span-3">
                  <div className="report-box__content">
                    <div className="flex">
                      <div className="report-box__item__icon text-primary bg-primary/20 border border-primary/20 flex items-center justify-center rounded-full">
                        <Lucide icon="PieChart" />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__item__indicator text-success cursor-pointer"
                          content="5.2% Higher than last month"
                        >
                          +5.2%
                          <Lucide icon="ArrowUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-2xl font-medium leading-7 mt-6">
                      $149,300
                    </div>
                    <div className="text-slate-500 mt-1">Total Assets</div>
                  </div>
                </div>
                <div className="report-box__item py-5 xl:py-0 px-5 sm:!border-t-0 col-span-12 sm:col-span-6 xl:col-span-3">
                  <div className="report-box__content">
                    <div className="flex">
                      <div className="report-box__item__icon text-pending bg-pending/20 border border-pending/20 flex items-center justify-center rounded-full">
                        <Lucide icon="CreditCard" />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__item__indicator text-danger cursor-pointer"
                          content="2% Lower than last month"
                        >
                          -2%
                          <Lucide icon="ArrowDown" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-2xl font-medium leading-7 mt-6">
                      5.241
                    </div>
                    <div className="text-slate-500 mt-1">New Transactions</div>
                  </div>
                </div>
                <div className="report-box__item py-5 xl:py-0 px-5 col-span-12 sm:col-span-6 xl:col-span-3">
                  <div className="report-box__content">
                    <div className="flex">
                      <div className="report-box__item__icon text-warning bg-warning/20 border border-warning/20 flex items-center justify-center rounded-full">
                        <Lucide icon="ShoppingBag" />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__item__indicator text-success cursor-pointer"
                          content="4.1% Higher than last month"
                        >
                          +4.1%
                          <Lucide icon="ArrowDown" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-2xl font-medium leading-7 mt-6">
                      1.405
                    </div>
                    <div className="text-slate-500 mt-1">New Products</div>
                  </div>
                </div>
                <div className="report-box__item py-5 xl:py-0 px-5 col-span-12 sm:col-span-6 xl:col-span-3">
                  <div className="report-box__content">
                    <div className="flex">
                      <div className="report-box__item__icon text-success bg-success/20 border border-success/20 flex items-center justify-center rounded-full">
                        <Lucide icon="HardDrive" />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__item__indicator text-danger cursor-pointer"
                          content="1% Lower than last month"
                        >
                          -1%
                          <Lucide icon="ArrowDown" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-2xl font-medium leading-7 mt-6">
                      2.034
                    </div>
                    <div className="text-slate-500 mt-1">New Stores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
          {/* BEGIN: Sales Report */}
          <div className="col-span-12 md:col-span-8 lg:col-span-6 mt-7">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Sales Report
              </h2>
              <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                <Lucide
                  icon="Calendar"
                  className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                />
                <Litepicker
                  value={salesReportFilter}
                  onChange={setSalesReportFilter}
                  options={{
                    autoApply: false,
                    singleMode: false,
                    numberOfColumns: 2,
                    numberOfMonths: 2,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="form-control sm:w-56 box pl-10"
                />
              </div>
            </div>
            <div className="intro-y box p-5 mt-12 sm:mt-4">
              <div className="md:flex items-center">
                <div className="mr-auto">
                  <div className="flex items-center">
                    <div className="text-2xl font-medium">$141,120.00</div>
                    <div className="flex items-center text-success cursor-pointer ml-3">
                      +5.2% <Lucide icon="ArrowUp" className="w-4 h-4 ml-0.5" />
                    </div>
                  </div>
                  <div className="text-slate-500 mt-1">Total Assets</div>
                </div>
                <select
                  className="form-select w-40 md:ml-auto mt-3 md:mt-0 dark:bg-darkmode-600 dark:border-darkmode-400"
                  aria-label="General report filter"
                >
                  <option>All Transactions</option>
                  <option>Cash In</option>
                  <option>Cash Out</option>
                </select>
              </div>
              <div className="mt-6">
                <ReportLineChart1 height={260} />
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
          {/* BEGIN: Top Countries */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 mt-4 md:mt-7">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Top Countries
              </h2>
              <a href="" className="ml-auto text-slate-500 truncate">
                View More
              </a>
            </div>
            <div className="intro-y box p-5 mt-4">
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={unitedStatesUrl}
                  />
                </div>
                <div className="ml-3 truncate pr-5">United States</div>
                <div className="ml-auto">$147.88</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={franceUrl}
                  />
                </div>
                <div className="ml-3 truncate pr-5">France</div>
                <div className="ml-auto">$96.68</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={spainUrl}
                  />
                </div>
                <div className="ml-3 truncate pr-5">Spain</div>
                <div className="ml-auto">$68.24</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={unitedKingdomUrl}
                  />
                </div>
                <div className="ml-3 truncate pr-5">United Kingdom</div>
                <div className="ml-auto">$62.56</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={indiaUrl}
                  />
                </div>
                <div className="ml-3 truncate pr-5">India</div>
                <div className="ml-auto">$62.56</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={brazilUrl}
                  />
                </div>
                <div className="ml-3 truncate pr-5">Brazil</div>
                <div className="ml-auto">$51.18</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={switzerlandUrl}
                  />
                </div>
                <div className="ml-3 truncate pr-5">Switzerland</div>
                <div className="ml-auto">$34.12</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={franceUrl}
                  />
                </div>
                <div className="ml-3 truncate pr-5">France</div>
                <div className="ml-auto">$96.68</div>
              </div>
              <div className="flex items-center mb-5 last:mb-0">
                <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
                  <img
                    className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src={unitedKingdomUrl}
                  />
                </div>
                <div className="ml-3 truncate pr-5">United Kingdom</div>
                <div className="ml-auto">$62.56</div>
              </div>
            </div>
          </div>
          {/* END: Top Countries */}
          {/* BEGIN: Product Report */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-4 lg:mt-7">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Product Report
              </h2>
              <a href="" className="ml-auto text-slate-500 truncate">
                View More
              </a>
            </div>
            <TabGroup className="intro-y box p-5 mt-4">
              <TabList className="nav-boxed-tabs w-4/5 mx-auto">
                <Tab className="w-full py-1.5 px-2" tag="button">
                  Active
                </Tab>
                <Tab className="w-full py-1.5 px-2" tag="button">
                  Inactive
                </Tab>
              </TabList>
              <div className="flex flex-col justify-center items-center mt-8">
                <div className="text-2xl leading-7 font-medium">17.421</div>
                <div className="text-slate-500 dark:text-slate-500 mt-1">
                  Total Products
                </div>
              </div>
              <TabPanels className="mt-8">
                <TabPanel>
                  <div className="w-44 mx-auto lg:w-auto lg:-ml-2 -mb-2">
                    <ReportBarChart1 height={192} />
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
          {/* END: Product Report */}
          {/* BEGIN: Seller Report */}
          <div className="col-span-12 lg:col-span-9 mt-4">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Seller Report
              </h2>
              <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                <select
                  className="form-select box w-32"
                  aria-label="General report filter"
                >
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                </select>
                <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300">
                  <Lucide
                    icon="FileText"
                    className="hidden sm:block w-4 h-4 mr-2"
                  />
                  Export to Excel
                </button>
              </div>
            </div>
            <TabGroup className="intro-y box p-5 mt-12 sm:mt-4">
              <div className="sm:flex items-center">
                <div className="mr-auto">
                  <div className="flex items-center">
                    <div className="text-2xl font-medium">24.112</div>
                    <div className="flex items-center text-danger cursor-pointer ml-3">
                      -2.5% <Lucide icon="ArrowUp" className="w-4 h-4 ml-0.5" />
                    </div>
                  </div>
                  <div className="text-slate-500 mt-1">New Transactions</div>
                </div>
                <TabList className="nav-boxed-tabs sm:w-64 rounded-lg mt-3 sm:mt-0">
                  <Tab className="w-full py-1.5 px-2" tag="button">
                    Daily
                  </Tab>
                  <Tab className="w-full py-1.5 px-2" tag="button">
                    Weekly
                  </Tab>
                  <Tab className="w-full py-1.5 px-2" tag="button">
                    Monthly
                  </Tab>
                </TabList>
              </div>
              <TabPanels className="mt-5">
                <TabPanel>
                  <div className="rounded-lg overflow-x-auto overflow-y-hidden">
                    <table className="table table-striped -mb-1">
                      <thead>
                        <tr>
                          <th className="!font-normal text-slate-500">#</th>
                          <th className="!font-normal text-slate-500 text-right">
                            TODAY
                          </th>
                          <th className="!font-normal text-slate-500 text-right">
                            YESTERDAY
                          </th>
                          <th className="!font-normal text-slate-500 text-right">
                            %CHANGE
                          </th>
                          <th className="!font-normal text-slate-500 text-center">
                            YTD TREND
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-slate-500 whitespace-nowrap">
                            TOTAL ORDERS
                          </td>
                          <td className="text-right text-success">231.152</td>
                          <td className="text-right">131.152</td>
                          <td className="text-success">
                            <div className="flex items-center justify-end">
                              +41.%
                              <Lucide
                                icon="ArrowUp"
                                className="w-4 h-4 ml-0.5"
                              />
                            </div>
                          </td>
                          <td className="flex justify-center">
                            <div className="w-48 -mr-4 -my-2.5">
                              <ReportLineChart2 height={49} index={0} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-slate-500 whitespace-nowrap">
                            TOTAL SALES
                          </td>
                          <td className="text-right text-danger">$612</td>
                          <td className="text-right">$413</td>
                          <td className="text-danger">
                            <div className="flex items-center justify-end">
                              -2%
                              <Lucide
                                icon="ArrowDown"
                                className="w-4 h-4 ml-0.5"
                              />
                            </div>
                          </td>
                          <td className="flex justify-center">
                            <div className="w-48 -mr-4 -my-2.5">
                              <ReportLineChart2 height={49} index={1} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-slate-500 whitespace-nowrap">
                            AVG. PER CUSTOMER
                          </td>
                          <td className="text-right text-success">$22.5</td>
                          <td className="text-right">$18.5</td>
                          <td className="text-success">
                            <div className="flex items-center justify-end">
                              +51%
                              <Lucide
                                icon="ArrowUp"
                                className="w-4 h-4 ml-0.5"
                              />
                            </div>
                          </td>
                          <td className="flex justify-center">
                            <div className="w-48 -mr-4 -my-2.5">
                              <ReportLineChart2 height={49} index={2} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-slate-500 whitespace-nowrap">
                            AVG. PER SELLER
                          </td>
                          <td className="text-right text-danger">$22.5</td>
                          <td className="text-right">$10.5</td>
                          <td className="text-danger">
                            <div className="flex items-center justify-end">
                              +21%
                              <Lucide
                                icon="ArrowDown"
                                className="w-4 h-4 ml-0.5"
                              />
                            </div>
                          </td>
                          <td className="flex justify-center">
                            <div className="w-48 -mr-4 -my-2.5">
                              <ReportLineChart2 height={49} index={3} />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
          {/* END: Seller Report */}
          {/* BEGIN: Seller Report */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 sm:row-start-4 md:row-start-3 lg:row-start-auto mt-4">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Seller Report
              </h2>
              <a href="" className="ml-auto text-slate-500 truncate">
                View More
              </a>
            </div>
            <div className="intro-y box p-5 mt-4">
              <div className="relative px-3">
                <div className="w-40 mx-auto lg:w-auto">
                  <ReportDonutChart1
                    className="mt-2 z-10 relative"
                    height={210}
                  />
                </div>
                <div className="flex flex-col justify-center items-center absolute w-full h-full top-0 left-0">
                  <div className="text-2xl leading-7 font-medium">1.215</div>
                  <div className="text-slate-500 mt-1">Total Sellers</div>
                </div>
              </div>
              <div className="w-52 lg:w-auto mx-auto mt-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary/50 border border-primary/50 rounded-full mr-3"></div>
                  <span className="truncate">17 - 30 Years old</span>
                  <span className="ml-auto">50%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-pending/50 border border-pending/50 rounded-full mr-3"></div>
                  <span className="truncate">31 - 50 Years old</span>
                  <span className="ml-auto">30%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-warning/50 border border-warning/60 rounded-full mr-3"></div>
                  <span className="truncate">&gt;= 50 Years old</span>
                  <span className="ml-auto">20%</span>
                </div>
              </div>
            </div>
          </div>
          {/* END: Seller Report */}
          {/* BEGIN: Sales Performance */}
          <div className="col-span-12 mt-4">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Sales Performance
              </h2>
              <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                <select
                  className="form-select box w-32"
                  aria-label="General report filter"
                >
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                </select>
                <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300">
                  <Lucide
                    icon="FileText"
                    className="hidden sm:block w-4 h-4 mr-2"
                  />
                  Export to PDF
                </button>
              </div>
            </div>
            <div className="intro-y box p-5 mt-12 sm:mt-4">
              <div className="overflow-x-auto overflow-y-hidden">
                <div className="daily-report">
                  <div className="daily-report__statistic flex">
                    <div className="w-full -mr-12">
                      <div className="text-slate-500 text-xs h-5"></div>
                      <div className="daily-report__statistic__week grid grid-cols-4 mt-2 text-slate-500">
                        <div>
                          <div className="daily-report__statistic__day w-full pt-[100%] mb-2.5"></div>
                          <div className="daily-report__statistic__day w-full pt-[100%] mb-2.5 relative">
                            <div className="daily-report__statistic__day__text text-slate-500 absolute inset-y-0 my-auto text-xs">
                              Mon
                            </div>
                          </div>
                          <div className="daily-report__statistic__day w-full pt-[100%] mb-2.5"></div>
                          <div className="daily-report__statistic__day w-full pt-[100%] mb-2.5 relative">
                            <div className="daily-report__statistic__day__text text-slate-500 absolute inset-y-0 my-auto text-xs">
                              Tue
                            </div>
                          </div>
                          <div className="daily-report__statistic__day w-full pt-[100%] mb-2.5"></div>
                          <div className="daily-report__statistic__day w-full pt-[100%] mb-2.5 relative">
                            <div className="daily-report__statistic__day__text text-slate-500 absolute inset-y-0 my-auto text-xs">
                              Wed
                            </div>
                          </div>
                          <div className="daily-report__statistic__day w-full pt-[100%] mb-2.5"></div>
                        </div>
                      </div>
                    </div>
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((month) => (
                      <div key={month} className="w-full">
                        <div className="text-slate-500 text-xs h-5">
                          {month}
                        </div>
                        <div className="daily-report__statistic__week grid grid-cols-4 mt-2">
                          {[1, 2, 3, 4].map((week) => (
                            <div key={week}>
                              {[
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun",
                              ].map((day) => (
                                <Tippy
                                  tag="div"
                                  key={day}
                                  content={`${$_.random(
                                    1,
                                    50
                                  )} sales on 2 Sep, 2021`}
                                  className={classnames({
                                    "daily-report__statistic__day w-full pt-[100%] mb-2 cursor-pointer zoom-in bg-primary": true,
                                    [salesPerformance()]: true,
                                  })}
                                />
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex items-center xl:justify-end">
                    <div className="mr-2 text-slate-500 text-xs">Less</div>
                    <Tippy
                      tag="div"
                      content="1 - 5 sales"
                      className="daily-report__info mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/10"
                    />
                    <Tippy
                      tag="div"
                      content="5 - 15 sales"
                      className="daily-report__info mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/20"
                    />
                    <Tippy
                      tag="div"
                      content="15 - 35 sales"
                      className="daily-report__info mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/30"
                    />
                    <Tippy
                      tag="div"
                      content="35 - 65 sales"
                      className="daily-report__info mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/40"
                    />
                    <Tippy
                      tag="div"
                      content="65+ sales"
                      className="daily-report__info mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/60"
                    />
                    <div className="mr-2 text-slate-500 text-xs">More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Sales Performance */}
        </div>
      </div>
      <div className="col-span-12 2xl:col-span-3">
        <div className="2xl:border-l border-slate-300/50 h-full 2xl:pt-6 pb-6">
          <div className="2xl:pl-6 grid grid-cols-12 gap-x-6 gap-y-8">
            {/* BEGIN: Attachments */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
              <div className="intro-x flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Shared Files
                </h2>
                <a href="" className="ml-auto text-slate-500 truncate">
                  View More
                </a>
              </div>
              <div className="mt-4">
                <div className="intro-x">
                  <div className="file box px-5 py-3 mb-3 flex items-center">
                    <div className="w-12 file__icon file__icon--directory"></div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Documentation.pdf</div>
                      <div className="text-slate-500 text-xs mt-1">
                        1 KB Document File
                      </div>
                    </div>
                    <Dropdown>
                      <DropdownToggle className="w-5 h-5 text-slate-500">
                        <Lucide icon="MoreVertical" className="w-4 h-4" />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent>
                          <DropdownItem>
                            <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                            Link
                          </DropdownItem>
                          <DropdownItem>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownItem>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="file box px-5 py-3 mb-3 flex items-center">
                    <div className="w-12 file__icon file__icon--file"></div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Rocketman.xd</div>
                      <div className="text-slate-500 text-xs mt-1">
                        20 MB Audio File
                      </div>
                    </div>
                    <Dropdown>
                      <DropdownToggle className="w-5 h-5 text-slate-500">
                        <Lucide icon="MoreVertical" className="w-4 h-4" />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent>
                          <DropdownItem>
                            <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                            Link
                          </DropdownItem>
                          <DropdownItem>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownItem>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="file box px-5 py-3 mb-3 flex items-center">
                    <div className="w-12 file__icon file__icon--empty-directory"></div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Latest Report.xls</div>
                      <div className="text-slate-500 text-xs mt-1">
                        20 KB Zipped File
                      </div>
                    </div>
                    <Dropdown>
                      <DropdownToggle className="w-5 h-5 text-slate-500">
                        <Lucide icon="MoreVertical" className="w-4 h-4" />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent>
                          <DropdownItem>
                            <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                            Link
                          </DropdownItem>
                          <DropdownItem>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownItem>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
                <a
                  href=""
                  className="intro-x btn w-full py-3 border-dashed border-slate-300 dark:border-darkmode-300"
                >
                  Launch File Manager
                </a>
              </div>
            </div>
            {/* END: Attachments */}
            {/* BEGIN: Important Notes */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
              <div className="intro-x flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Important Notes
                </h2>
                <a href="" className="ml-auto text-slate-500 truncate">
                  View More
                </a>
              </div>
              <div className="mt-4">
                <div className="intro-x box p-5">
                  <button className="btn w-full">
                    Add New Notes
                    <Lucide icon="ArrowRight" className="w-4 h-4 ml-auto" />
                  </button>
                  <div className="mt-5">
                    <div className="font-medium">Why do we use it?</div>
                    <div className="flex items-center mt-2">
                      <div className="leading-relaxed text-slate-500">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                      <Dropdown className="ml-3">
                        <DropdownToggle className="w-5 h-5 text-slate-500">
                          <Lucide icon="MoreVertical" className="w-4 h-4" />
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>
                              <Lucide icon="Edit2" className="w-4 h-4 mr-2" />
                              Edit
                            </DropdownItem>
                            <DropdownItem>
                              <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="mt-5 pt-5 border-t border-dashed border-slate-200">
                    <div className="font-medium">Where can I get some?</div>
                    <div className="flex items-center mt-2">
                      <div className="leading-relaxed text-slate-500">
                        There are many variations of passages of Lorem Ipsum
                        available but the.
                      </div>
                      <Dropdown className="ml-3">
                        <DropdownToggle className="w-5 h-5 text-slate-500">
                          <Lucide icon="MoreVertical" className="w-4 h-4" />
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>
                              <Lucide icon="Edit2" className="w-4 h-4 mr-2" />
                              Edit
                            </DropdownItem>
                            <DropdownItem>
                              <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Important Notes */}
            {/* BEGIN: Browser Visitors */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
              <div className="intro-x flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Browser Visitors
                </h2>
                <a href="" className="ml-auto text-slate-500 truncate">
                  View More
                </a>
              </div>
              <div className="mt-4">
                <div className="intro-x box p-5">
                  <div className="flex items-center">
                    <img
                      className="w-7 h-7"
                      alt="Rocketman Tailwind HTML Admin Template"
                      src={chromeUrl}
                    />
                    <div className="ml-4">Chrome</div>
                    <div className="ml-auto">25%</div>
                  </div>
                  <div className="flex items-center mt-5">
                    <img
                      className="w-7 h-7"
                      alt="Rocketman Tailwind HTML Admin Template"
                      src={edgeUrl}
                    />
                    <div className="ml-4">Microsoft Edge</div>
                    <div className="ml-auto">5%</div>
                  </div>
                  <div className="flex items-center mt-5">
                    <img
                      className="w-7 h-7"
                      alt="Rocketman Tailwind HTML Admin Template"
                      src={firefoxUrl}
                    />
                    <div className="ml-4">Firefox</div>
                    <div className="ml-auto">45%</div>
                  </div>
                  <div className="flex items-center mt-5">
                    <img
                      className="w-7 h-7"
                      alt="Rocketman Tailwind HTML Admin Template"
                      src={operaUrl}
                    />
                    <div className="ml-4">Opera</div>
                    <div className="ml-auto">2%</div>
                  </div>
                  <div className="flex items-center mt-5">
                    <img
                      className="w-7 h-7"
                      alt="Rocketman Tailwind HTML Admin Template"
                      src={safariUrl}
                    />
                    <div className="ml-4">Safari</div>
                    <div className="ml-auto">20%</div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Browser Visitors */}
            {/* BEGIN: Transactions */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
              <div className="intro-x flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Transactions
                </h2>
                <a href="" className="ml-auto text-slate-500 truncate">
                  View More
                </a>
              </div>
              <div className="mt-4">
                
                <a
                  href=""
                  className="intro-x btn w-full py-3 border-dashed border-slate-300 dark:border-darkmode-300"
                >
                  View More
                </a>
              </div>
            </div>
            {/* END: Transactions */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
