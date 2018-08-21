class HomeControllerTest < ActionDispatch::IntegrationTest
  def setup
    get "/"
  end

  test "there is a carousel" do
    assert_select "div.slideshow-container"
  end

  test "there is a carousel title" do
    assert_select "div.slideshow-container h1", "The Foodtech Startup"
  end

  test "there is a tab" do
    assert_select "div.tab-container"
  end
end
