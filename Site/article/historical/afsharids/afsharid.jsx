import React from 'react';
import ReactDOM from 'react-dom';

function CommentSection() {
  // کد مربوط به بخش نظرات تعاملی در اینجا نوشته می‌شود.
  return (
    <div className="comment-section">
      <h2>دیدگاه‌ها و پرسش‌ها</h2>
      {/* ادامه‌ی کد بخش نظرات */}
    </div>
  );
}

function App() {
  return (
    <div>
      <CommentSection />
      {}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('react-root'));
