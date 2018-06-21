import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Card from 'react-native-material-ui/src/Card';
import Icon from '../Icon';
import { Header1 } from '../PageHeader';
import { TextNormal } from '../Text';
import LinearGradient from 'react-native-linear-gradient';
import Img from 'gatsby-image';
import { ThemeContext } from '../ThemeProvider';

const Profile = ({
  name,
  twitterName,
  githubName,
  content,
  profileImage,
  shadowImage,
}) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <View
          style={theme.style({
            element: 'cardOuterContainer',
            type: 'withIcon',
          })}
        >
          <Card
            style={{
              container: theme.rawStyles.cardContainer.withIcon,
            }}
          >
            <LinearGradient
              style={theme.style({
                element: 'cardGradient',
                type: 'withIcon',
              })}
              {...theme.gradient('lightBlock')}
              pointerEvents="none"
            >
              <View
                style={theme.style({
                  element: 'cardTitle',
                  type: 'withIcon',
                })}
                pointerEvents="none"
              >
                <Header1 theme={theme}>{name}</Header1>
                <View
                  style={theme.style({
                    element: 'socialBlock',
                  })}
                >
                  {twitterName && (
                    <Text
                      style={theme.style({
                        element: 'socialBlockEntry',
                      })}
                    >
                      <Icon name="twitter" />
                      <TextNormal theme={theme} element="socialBlockEntryText">
                        {twitterName}
                      </TextNormal>
                    </Text>
                  )}
                  {githubName && (
                    <Text
                      style={theme.style({
                        element: 'socialBlockEntry',
                      })}
                    >
                      <Icon name="github" />
                      <TextNormal theme={theme} element="socialBlockEntryText">
                        {githubName}
                      </TextNormal>
                    </Text>
                  )}
                </View>
              </View>
              <View
                style={theme.style({
                  element: 'cardTextBody',
                  type: 'withIcon',
                })}
                pointerEvents="none"
              >
                <TextNormal theme={theme}>{content}</TextNormal>
              </View>
            </LinearGradient>
          </Card>
          <View
            style={theme.style({
              element: 'cardIconContainer',
            })}
          >
            <View
              style={{
                position: 'absolute',
                top: 36,
                height: '99%',
                width: '99%',
              }}
            >
              <Img sizes={shadowImage} />
            </View>
            <Icon name="tensiq" element="cardWrapIcon" />
            <View
              style={{
                position: 'absolute',
                top: 35,
                left: -2,
                width: '100%',
              }}
            >
              <Img sizes={profileImage} />
            </View>
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  twitterName: PropTypes.string,
  githubName: PropTypes.string,
  content: PropTypes.any,
  profileImage: PropTypes.object,
  shadowImage: PropTypes.object,
};

export default Profile;
