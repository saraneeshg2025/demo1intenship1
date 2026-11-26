function CourseCard({ course, onToggle }) {
  const complete = course.progress === 100

  return (
    <article className="course-card">
      <div className={`course-cover ${course.color}`}><span aria-hidden="true">{course.icon}</span><small>{course.category}</small></div>
      <div className="course-details"><div className="course-title-row"><div><h3>{course.title}</h3><p>with {course.instructor}</p></div><span className="lesson-count">{course.duration}</span></div><div className="course-progress-line"><div className="progress-label"><span>{complete ? 'Completed' : 'Your progress'}</span><strong>{course.progress}%</strong></div><div className="progress-track"><span style={{ width: `${course.progress}%` }} /></div></div></div>
      <button className={complete ? 'course-action complete' : 'course-action'} type="button" onClick={() => onToggle(course.id)}>{complete ? 'Restart' : 'Continue'} <span>→</span></button>
    </article>
  )
}

export default CourseCard
