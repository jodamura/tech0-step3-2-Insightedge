import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-red-500">フィードバックをお願いします！</h2>
        <button aria-label="Close">
          <XIcon className="h-8 w-8" />
        </button>
      </div>
      <p className="mb-6 text-lg font-medium">今後、よりあなたにとって最適なミッション・ストーリーを提供するために、ご意見をお聞かせください</p>
      <form>
        <div className="space-y-3 mb-6">
          <label className="flex items-center text-lg space-x-2">
            <input className="rounded" type="checkbox" />
            <span>ミッションがつまらない</span>
          </label>
          <label className="flex items-center text-lg space-x-2">
            <input className="rounded" type="checkbox" />
            <span>ストーリーがつまらない</span>
          </label>
          <label className="flex items-center text-lg space-x-2">
            <input className="rounded" type="checkbox" />
            <span>親子で楽しめた!</span>
          </label>
          <label className="flex items-center text-lg space-x-2">
            <input className="rounded" type="checkbox" />
            <span>別の推しキャラでも使ってみたい!</span>
          </label>
          <label className="flex items-center text-lg space-x-2">
            <input className="rounded" type="checkbox" />
            <span>またオシミツを使ってみたい!</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium" htmlFor="feedback">
          他に何か共有したいことはありますか?
          </label>
          <textarea className="w-full p-2 border rounded" id="feedback" placeholder="ex)このテーマでストーリーを生成して欲しい..." rows="4" />
        </div>
        <div className="flex justify-between items-center">
          <a className="text-sm text-blue-600 hover:underline" href="#">
            Privacy Policy
          </a>
          <div className="space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-red-500 text-white">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

    
