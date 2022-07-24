import {Component} from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {HiOutlineSearch} from 'react-icons/hi'
import {CgHome} from 'react-icons/cg'
import {FaRegNewspaper} from 'react-icons/fa'
import {BiSpreadsheet} from 'react-icons/bi'
import {MdOutlinePermIdentity} from 'react-icons/md'
import {VscBellDot} from 'react-icons/vsc'
import {TbLogout} from 'react-icons/tb'
import {GoTriangleDown} from 'react-icons/go'

import './App.css'

const data = [
  {
    key: 300,
    group_name: '20',
    Employer: 21,
    Employee: 30,
    Total_Interest: 40,
  },
  {
    group_name: '25',
    Employer: 25,
    Employee: 35,
    Total_Interest: 65,
  },
  {
    group_name: '30',
    Employer: 36,
    Employee: 40,
    Total_Interest: 75,
  },
  {
    group_name: '35',
    Employer: 45,
    Employee: 45,
    Total_Interest: 85,
  },
  {
    group_name: '40',
    Employer: 48,
    Employee: 50,
    Total_Interest: 105,
  },
  {
    group_name: '45',
    Employer: 52,
    Employee: 55,
    Total_Interest: 110,
  },
  {
    group_name: '50',
    Employer: 65,
    Employee: 60,
    Total_Interest: 115,
  },
  {
    group_name: '55',
    Employer: 70,
    Employee: 65,
    Total_Interest: 120,
  },
  {
    group_name: '60',
    Employer: 72,
    Employee: 75,
    Total_Interest: 125,
  },
  {
    group_name: '65',
    Employer: 83,
    Employee: 80,
    Total_Interest: 153,
  },
]

class App extends Component {
  state = {
    contribution: 12,
    age: 65,
  }

  onChangeContribution = event => {
    this.setState({
      contribution: event.target.value,
    })
  }

  onChangeAge = event => {
    this.setState({
      age: event.target.value,
    })
  }

  TickFormatter = number => `$${number}`

  renderSideBar = () => (
    <div className="side-bar-container">
      <div className="top-container">
        <div className="image-search-container">
          <img
            src="https://image.shutterstock.com/image-photo/color-butterfly-isolated-on-white-600w-570560110.jpg"
            alt="butter fly"
            className="butterfly-image"
          />

          <button type="button" className="button">
            <HiOutlineSearch className="icon" size={18} />
          </button>
        </div>
        <div className="feature-container">
          <button type="button" className="button active-button">
            <CgHome className="icon active-icon" size={20} />
          </button>
          <button type="button" className="button">
            <FaRegNewspaper className="icon" size={18} />
          </button>
          <button type="button" className="button">
            <BiSpreadsheet className="icon" size={18} />
          </button>
          <button type="button" className="button">
            <MdOutlinePermIdentity className="icon" size={18} />
          </button>
        </div>
      </div>
      <div className="bottom-container">
        <button type="button" className="button">
          <VscBellDot className="icon" size={18} />
        </button>
        <button type="button" className="button">
          <TbLogout className="icon" size={18} />
        </button>
      </div>
    </div>
  )

  renderProfile = () => (
    <div className="profile-container">
      <div className="profile-pic-details-container">
        <img
          src="https://res.cloudinary.com/dcci6hybb/image/upload/v1640866012/1640865894420_vlj20b.png"
          alt="profile"
          className="profile-img"
        />
        <div className="profile-details-container">
          <h1 className="profile-name">Hi Sai,</h1>
          <p className="greeting">welcome back.</p>
        </div>
      </div>
      <div className="account-container">
        <h1 className="today-heading">Today</h1>
        <h1 className="balance-amount">$19,892</h1>
        <p className="account-text">Account Balance</p>
        <h3 className="contributions-amount">$4,000</h3>
        <p className="account-text">Year-to-Date Contributions</p>
        <h3 className="interest-amount">$1,892</h3>
        <p className="account-text">Total Interest</p>
        <button type="button" className="account-option">
          I want to <GoTriangleDown className="triangle" />
        </button>
        <div className="recent-transactions-container">
          <h1 className="transactions-heading">Recent Transactions</h1>
          <div className="transaction-details-container">
            <p className="transaction-date">2020-08-07</p>
            <p className="transaction-text">
              Withdrawal Transfer to Bank-XXX11
            </p>
          </div>
          <div className="transaction-details-container">
            <p className="transaction-date">2020-07-21</p>
            <p className="transaction-text">
              Withdrawal Transfer to Bank-XXX11
            </p>
          </div>
          <div className="transaction-details-container">
            <p className="transaction-date">2020-07-16</p>
            <p className="transaction-text">
              Withdrawal Transfer to Bank-XXX11
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  renderContribution = () => (
    <>
      <div className="contribution-container">
        <h1 className="contribution-heading">Contributions Overtime</h1>
        <div className="tag-container">
          <div className="tag">
            <div className="empty1 box">{null}</div>
            <p className="tag-para">Employer:</p>
            <h1 className="tag-heading">K 73,500</h1>
          </div>
          <div className="tag">
            <div className="empty2 box">{null}</div>
            <p className="tag-para">Employee:</p>
            <h1 className="tag-heading">K 52,500</h1>
          </div>
          <div className="tag">
            <div className="empty3 box">{null}</div>
            <p className="tag-para">Total Interest:</p>
            <h1 className="tag-heading">K 244,313</h1>
          </div>
        </div>
      </div>
      <div className="bar-chart">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={data}
            margin={{
              top: 10,
            }}
          >
            <CartesianGrid strokeDasharray="" vertical={false} />
            <XAxis
              dataKey="group_name"
              tick={{
                stroke: '#b9b9b9',
                strokeWidth: 1,
              }}
              axisLine={false}
              tickLine={false}
              minTickGap={20}
              allowDataOverflow
            />
            <YAxis
              tickFormatter={this.TickFormatter}
              tick={{
                stroke: '#b9b9b9',
                strokeWidth: 0,
              }}
              axisLine={false}
              dataKey="key"
            />
            <Bar
              dataKey="Employer"
              name="Employer"
              fill="#36318f"
              barSize="5%"
              stackId="a"
            />
            <Bar
              dataKey="Employee"
              name="Employee"
              fill="#4f46e5"
              barSize="5%"
              stackId="a"
            />
            <Bar
              dataKey="Total_Interest"
              name="Total Interest"
              fill="#a29fd6"
              barSize="5%"
              stackId="a"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )

  renderRadialPercentage = () => (
    <div className="radial-percentage">
      <div className="radial-box">
        <CircularProgressbar
          label="Average"
          value={78}
          text="78%"
          styles={buildStyles({
            textColor: '#424040',
            pathColor: '#00ab41',
            trailColor: '#CDFFE9',
          })}
        />
        <p className="radial-title">Average</p>
      </div>
      <div className="radial-box">
        <CircularProgressbar
          label="Average"
          value={95}
          text="95%"
          styles={buildStyles({
            textColor: '#424040',
            pathColor: '#00ab41',
            trailColor: '#CDFFE9',
          })}
        />
        <p className="radial-title">Top</p>
      </div>
      <div className="radial-box">
        <CircularProgressbar
          label="Average"
          value={59}
          text="59%"
          styles={buildStyles({
            textColor: '#424040',
            fontWeight: '600',
            pathColor: '#00ab41',
            trailColor: '#CDFFE9',
          })}
        />
        <p className="radial-title">Me</p>
      </div>
    </div>
  )

  renderGoalAchievement = () => (
    <div className="goal-achievement-container">
      <h1 className="peers-heading">How do I compare to my peers</h1>
      <p className="peers-text">
        These numbers represent current goal achievement
      </p>
      <div className="comparison-container">
        <div className="details-container">
          <div className="container">
            <p className="compare-text">Age: </p>
            <select className="select-container">
              <option value="Under 30">Under 30</option>
              <option value="Under 40">Under 40</option>
              <option value="Under 50">Under 50</option>
            </select>
          </div>
          <div className="container">
            <p className="compare-text">Salary:</p>
            <select className="select-container">
              <option value="K 20-K 30">K 20-K 30</option>
              <option value="K 30-K 50">K 30-K 50</option>
              <option value="K 50-K 100">K 50-K 100</option>
            </select>
          </div>
          <div className="container">
            <p className="compare-text">Gender:</p>
            <select className="select-container">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Trans Gender">Trans Gender</option>
            </select>
          </div>
        </div>
        {this.renderRadialPercentage()}
      </div>
    </div>
  )

  renderRetirementIncome = () => (
    <div className="retirement-income-container">
      <p className="retirement-title">Retirement Income</p>
      <h1 className="retirement-heading">Starting Year 2056</h1>
      <div className="goals-container">
        <div className="goals-details-container">
          <h1 className="goals-income">$300,000</h1>
          <p className="goals-text">My Goal</p>
          <hr className="hr-line" />
        </div>
        <div className="goals-details-container">
          <h1 className="goals-income">59%</h1>
          <p className="goals-text">Goal Achieved</p>
          <hr className="hr-line" />
        </div>
        <div className="goals-details-container">
          <h1 className="goals-income">$300</h1>
          <p className="goals-text">Est. Monthly Income</p>
          <hr className="hr-line" />
        </div>
      </div>
      {this.renderContribution()}
      {this.renderGoalAchievement()}
    </div>
  )

  renderRetirementStrategy = () => {
    const {contribution, age} = this.state
    return (
      <div className="retirement-strategy-container">
        <div className="strategy-container">
          <h1 className="retirement-heading">Retirement Strategy</h1>
          <p className="contribution-text">Employee Contribution</p>
          <div className="input-container">
            <input
              className="input-text"
              id="contribution"
              type="range"
              min={0}
              max={20}
              step={1}
              value={contribution}
              onChange={this.onChangeContribution}
            />
            <label htmlFor="contribution">{contribution}%</label>
          </div>
          <p className="contribution-text">Retirement Age</p>
          <div className="input-container">
            <input
              className="input-text"
              id="age"
              type="range"
              min={0}
              max={100}
              step={1}
              value={age}
              onChange={this.onChangeAge}
            />
            <label htmlFor="age">{age}</label>
          </div>
          <hr className="horizontal-line" />
          <div className="subtext-container">
            <p className="strategy-subtext">Employer Contribution</p>
            <p className="strategy-subtext">8.4%</p>
          </div>
          <div className="subtext-container">
            <p className="retirement-strategy-subtext">Interest Rate</p>
            <p className="retirement-strategy-subtext">5%</p>
          </div>
          <div className="button-container">
            <button type="button" className="update-btn">
              Update
            </button>
            <a
              href="https://google.com"
              className="view-docs"
              target="_blank"
              rel="noreferrer"
            >
              View Help Docs {`>`}
            </a>
          </div>
        </div>
        <div className="question-container">
          <p className="question-heading">
            Are you considering a
            <br /> <span className="question">Housing Advance?</span>
          </p>
          <p className="question-text">Limited time reduced interest</p>
          <a
            href="https://google.com"
            className="view-docs"
            target="_blank"
            rel="noreferrer"
          >
            Learn More {`>`}
          </a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="responsive-home-container">
          {this.renderSideBar()}
          {this.renderProfile()}
          {this.renderRetirementIncome()}
          {this.renderRetirementStrategy()}
        </div>
      </div>
    )
  }
}

export default App
