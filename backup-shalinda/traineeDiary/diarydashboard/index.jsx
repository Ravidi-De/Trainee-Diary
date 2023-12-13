import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Dashboard, DashboardLandingCard } from '../../../components/common'

const TraineeDiaryDashboard = () => {
  useEffect(() => {
    document.title = 'Training Diary Dashboard'
  }, [])

  return (
    <Dashboard
      sectionLinks={[
        {
          section: 'Sessions',
          children: [
            {
              path: '/sessions/view',
              name: 'View all sessions',
              icon: () => (
                <FontAwesomeIcon
                  className="mr-4 text-3xl text-gray-300"
                  icon={faUserGroup}
                />
              ),
            },
            {
              path: '/sessions/create',
              name: 'Create session',
              icon: () => (
                <FontAwesomeIcon
                  className="mr-4 text-3xl text-gray-300"
                  icon={faUserGroup}
                />
              ),
            },
          ],
        },
        {
          section: 'Other Options',
          children: [
            {
              path: '/dashboard',
              name: 'Dashboard',
              icon: () => (
                <FontAwesomeIcon
                  className="mr-4 text-3xl text-gray-300"
                  icon={faUserGroup}
                />
              ),
            },
          ],
        },
      ]}
    >
      <div className="block my-6">
        <p className="text-3xl text-[#FFA14E] font-bold mb-4">
          👋 Good Afternoon
        </p>
        <p className="text-3xl font-semibold">
        Training Diary Dashboard Dashboard
        </p>
      </div>

      <div className="block mt-24">
        <DashboardLandingCard
          title="Schedule a session"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          illustration="/static/illustrations/Session.svg"
          linkTitle="Create Session"
          linkLoc="/training-schedule-mgt/sessions/create"
        />
      </div>
    </Dashboard>
  )
}

export default TraineeDiaryDashboard
