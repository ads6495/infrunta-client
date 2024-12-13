// i need to create a dashboard page with the following components:
// weekly tracker
// suggested lesson 
// leaderboards
// "engaging activing section"
    // reading button, listening button, speaking button.

    import { Play } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="mx-auto max-w-7xl p-4 md:p-6">
            <WeeklyTracker />
            <SuggestedLesson />
            <Leaderboards />
            <EngagingActivities />
        </div>
    );
}

function WeeklyTracker() {
    const mockData = [
        { day: 'Monday', completed: true },
        { day: 'Tuesday', completed: false },
        { day: 'Wednesday', completed: true },
        { day: 'Thursday', completed: false },
        { day: 'Friday', completed: true },
        { day: 'Saturday', completed: true },
        { day: 'Sunday', completed: false },
    ];

    return (
        <div className="my-4 rounded-lg border border-gray-300 p-4">
            <h3 className="text-lg font-semibold">Weekly Tracker</h3>
            <div className="grid grid-cols-7 gap-2 mt-2">
                {mockData.map((dayData, index) => (
                    <div key={index} className="text-center">
                        <span>{dayData.day}</span>
                        <div
                            className={`mt-1 h-6 w-6 mx-auto rounded-full ${
                                dayData.completed ? 'bg-green-500' : 'bg-gray-300'
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SuggestedLesson() {
    return (
        <div className="my-4 rounded-lg border border-gray-300 p-4">
            <h3 className="text-lg font-semibold">Suggested Lesson</h3>
            <p className="mt-2">Display a suggested lesson based on users progress</p>
        </div>
    );
}

function Leaderboards() {
    const mockData = [
        { avatar: '👤', username: 'User1', points: 150 },
        { avatar: '👤', username: 'User2', points: 140 },
        { avatar: '👤', username: 'User3', points: 130 },
        { avatar: '👤', username: 'User4', points: 120 },
        { avatar: '👤', username: 'User5', points: 110 },
    ];

    return (
        <div className="my-4 rounded-lg border border-gray-300 p-4">
            <h3 className="text-lg font-semibold">Leaderboards</h3>
            <div className="mt-2">
                {mockData.map((user, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200 py-2">
                        <div className="flex items-center">
                            <span className="text-2xl">{user.avatar}</span>
                            <span className="ml-2">{user.username}</span>
                        </div>
                        <span>{user.points} pts</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function EngagingActivities() {
    return (
        <div className="my-4 rounded-lg border border-gray-300 p-4">
            <h3 className="text-lg font-semibold">Engaging Activities</h3>
            <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Play className="h-6 w-6 mr-2" />
                    Reading
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Play className="h-6 w-6 mr-2" />
                    Listening
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Play className="h-6 w-6 mr-2" />
                    Speaking
                </button>
            </div>
        </div>
    );
}
