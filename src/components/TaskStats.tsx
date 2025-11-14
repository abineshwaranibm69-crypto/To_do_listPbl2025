import { CheckCircle2, ListTodo } from 'lucide-react';
import { Task } from '../lib/supabase';

interface TaskStatsProps {
  tasks: Task[];
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm font-medium mb-1">Pending Tasks</p>
            <p className="text-4xl font-bold">{pendingCount}</p>
          </div>
          <ListTodo className="w-12 h-12 text-blue-200" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 text-sm font-medium mb-1">Completed</p>
            <p className="text-4xl font-bold">{completedCount}</p>
          </div>
          <CheckCircle2 className="w-12 h-12 text-green-200" />
        </div>
      </div>
    </div>
  );
}
