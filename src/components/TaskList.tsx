import { Check, Trash2, Circle } from 'lucide-react';
import { Task } from '../lib/supabase';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onToggleComplete, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <Circle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => onToggleComplete(task.id, !task.completed)}
              className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                task.completed
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300 hover:border-green-500'
              }`}
            >
              {task.completed && <Check className="w-4 h-4 text-white" />}
            </button>

            <span
              className={`flex-1 text-lg transition-all duration-200 ${
                task.completed
                  ? 'text-gray-400 line-through'
                  : 'text-gray-800'
              }`}
            >
              {task.title}
            </span>

            <button
              onClick={() => onDelete(task.id)}
              className="opacity-0 group-hover:opacity-100 flex-shrink-0 text-red-500 hover:text-red-600 transition-all duration-200"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
