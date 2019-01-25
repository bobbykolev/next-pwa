import Header from './Header'
import OfflineSupport from './OfflineSupport'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <OfflineSupport />
    <Header />
    {props.children}
  </div>
)

export default Layout
