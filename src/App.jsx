import { useState } from 'react'
import CourseCard from './components/CourseCard.jsx'
import MetricCard from './components/MetricCard.jsx'

const starterCourses = [
  { id: 1, title: 'React foundations', instructor: 'Maya Patel', category: 'FRONT-END', duration: '6 lessons', progress: 72, icon: '⚛', color: 'course-blue' },
  { id: 2, title: 'Design that works', instructor: 'Jordan Lee', category: 'DESIGN', duration: '8 lessons', progress: 38, icon: '✳', color: 'course-peach' },
  { id: 3, title: 'JavaScript essentials', instructor: 'Alex Morgan', category: 'CODING', duration: '10 lessons', progress: 100, icon: '⌘', color: 'course-yellow' },
]
const filters = ['All courses', 'In progress', 'Completed']

function App() {
  const [courses, setCourses] = useState(starterCourses)
  const [filter, setFilter] = useState('All courses')
  const completed = courses.filter((course) => course.progress === 100).length
  const average = Math.round(courses.reduce((total, course) => total + course.progress, 0) / courses.length)
  const visibleCourses = courses.filter((course) => {
    if (filter === 'In progress') return course.progress > 0 && course.progress < 100
    if (filter === 'Completed') return course.progress === 100
    return true
  })

  function toggleCourse(id) {
    setCourses((currentCourses) => currentCourses.map((course) => (
      course.id === id ? { ...course, progress: course.progress === 100 ? 0 : 100 } : course
    )))
  }

  return (
    <main className="learn-app">
      <aside className="learn-sidebar"><a className="learn-logo" href="#home"><span>✦</span> learn<span>space</span></a><p className="learn-side-label">YOUR SPACE</p><a className="learn-nav active" href="#home"><span>⌂</span> Overview</a><a className="learn-nav" href="#courses"><span>▤</span> My courses <b>3</b></a><a className="learn-nav" href="#goals"><span>◎</span> Learning goals</a><div className="sidebar-progress"><p>WEEKLY GOAL</p><div className="goal-ring"><strong>4<span>/5</span></strong></div><small>4 of 5 study days</small></div><div className="learn-user"><span className="learn-avatar">S</span><span><strong>Saran</strong><small>Curious learner</small></span><b>⌄</b></div></aside>

      <section className="learn-content" id="home">
        <header className="learn-topbar"><div className="breadcrumb">My learning <span>/</span> Overview</div><div className="topbar-actions"><button type="button" aria-label="Notifications">♧</button><span className="topbar-avatar">S</span></div></header>

        <section className="welcome-panel"><div><p className="learn-kicker">WEDNESDAY, NOVEMBER 25, 2026</p><h1>Keep that curiosity<br />going, Saran <span>✦</span></h1><p>You’re building a great learning habit. One lesson at a time.</p><a href="#courses">Pick up where you left off <span>→</span></a></div><div className="welcome-art" aria-hidden="true"><div className="art-book book-back" /><div className="art-book book-front">✦</div><span className="art-star star-one">✧</span><span className="art-star star-two">✦</span></div></section>

        <section className="metrics-grid" id="goals"><MetricCard label="Courses enrolled" value={String(courses.length).padStart(2, '0')} icon="▤" tone="blue" /><MetricCard label="Average progress" value={`${average}%`} icon="◔" tone="green" /><MetricCard label="Courses completed" value={String(completed).padStart(2, '0')} icon="✓" tone="peach" /></section>

        <section className="courses-section" id="courses"><div className="courses-heading"><div><p className="learn-kicker">YOUR LEARNING PATH</p><h2>My courses</h2></div><button type="button" className="browse-courses">Browse catalog <span>↗</span></button></div><div className="course-filters" role="group" aria-label="Filter courses">{filters.map((item) => <button key={item} className={filter === item ? 'course-filter selected' : 'course-filter'} type="button" onClick={() => setFilter(item)}>{item}</button>)}</div><div className="course-list">{visibleCourses.length > 0 ? visibleCourses.map((course) => <CourseCard key={course.id} course={course} onToggle={toggleCourse} />) : <p className="empty-courses">No courses in this view yet.</p>}</div></section>

        <footer className="learn-footer"><span>Small steps, big ideas.</span><span>LEARNING IS A JOURNEY ✦</span></footer>
      </section>
    </main>
  )
}

export default App
