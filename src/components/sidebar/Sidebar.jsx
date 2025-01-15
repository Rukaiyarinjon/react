

const Sidebar = () => {
    return (
        <div>
            <div>
  <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Upper Sidebar</button>
  <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasTopLabel">React</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    {/* <div className="offcanvas-body">
      ...
    </div> */}
  </div>
</div>

        </div>
    );
};

export default Sidebar;