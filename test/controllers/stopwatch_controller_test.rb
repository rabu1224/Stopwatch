require 'test_helper'

class StopwatchControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get stopwatch_show_url
    assert_response :success
  end

end
