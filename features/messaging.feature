Feature: Messaging

  Scenario: Sending a message
    Given a get-message is created
    When the get-message is sent
    Then the get-response should contain "All information!"

  Scenario: Creating and Sending a message
    Given a post-message is created
    When the post-message is sent
    Then the response should contain "Created!"
    And the created post-message should be returned