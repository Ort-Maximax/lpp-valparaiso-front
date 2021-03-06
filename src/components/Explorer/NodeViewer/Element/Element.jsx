/* eslint no-extend-native: 0 */
/* eslint no-param-reassign: 0 */
/* eslint no-plusplus: 0 */
/* eslint func-names: 0 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Divider from 'material-ui/Divider';

import Checkbox from 'material-ui/Checkbox';
import Tooltip from 'material-ui/Tooltip';

import File from 'img/components/File';
import Folder from 'img/components/Folder';
import Archive from 'img/components/Archive';
import Picture from 'img/components/Picture';
import Video from 'img/components/Video';
import Music from 'img/components/Music';

import './styles/Element.css';

String.prototype.nthIndexOf = function (pattern, n) {
  let i = -1;
  while (n-- && i++ < this.length) {
    i = this.indexOf(pattern, i);
    if (i < 0) break;
  }
  return i;
};

const Element = ({
  node, isFolder, selected, toggleSelect,
}) => {
  let icon = <File />;
  if (isFolder) {
    icon = <Folder />;
  } else {
    switch (node.ext) {
      case ('.avi'):
      case ('.mkv'):
      case ('.webm'):
      case ('.mp4'):
      case ('.ogv'):
        icon = <Video />;
        break;
      case ('.mp3'):
      case ('.oga'):
      case ('.ogg'):
      case ('.wav'):
      case ('.flac'):
        icon = <Music />;
        break;
      case ('.jpg'):
      case ('.jpeg'):
      case ('.png'):
        icon = <Picture />;
        break;
      case ('.zip'):
      case ('.rar'):
      case ('.tar'):
        icon = <Archive />;
        break;
      default:
        icon = <File />;
    }
  }
  // const width = window.innerWidth;
  /* TODO: voir comment recuperer un thumbnail du fichier */
  return (
    <Fragment>
      {
        isFolder ?
          <Card raised={selected}>
            <Tooltip enterDelay={1000} title={node.name}>
              <CardContent className={`folderContentContainer ${toggleSelect ? 'larger' : ''} ${selected ? 'selected' : ''}`}>

                <div className="folderContentIconContainer">
                  {icon}
                </div>

                <Typography component="p" align="center" className="text">
                  {node.name}
                </Typography>

                {
                toggleSelect &&
                <Checkbox
                  style={{
                    width: 'auto',
                    height: 'auto',
                    backgroundColor: 'white',
                    borderRadius: '0',
                  }}
                  checked={selected}
                  color="primary"
                />
                }

              </CardContent>
            </Tooltip>
          </Card>
      :
          <Card className={`fileElementContainer ${toggleSelect ? 'larger' : ''}`} raised={selected}>
            {
              toggleSelect &&
              <Checkbox
                style={{
                  width: 'auto',
                  height: 'auto',
                  position: 'absolute',
                  top: 1,
                  right: 1,
                }}
                checked={selected}
                value="checkedB"
                color="primary"
              />
            }

            <div className="filePreviewContainer">
              {icon}
            </div>
            <Divider />
            <Tooltip enterDelay={1000} title={node.name}>
              <CardContent className={`fileContentContainer ${selected ? 'selected' : ''}`}>
                {/* width > 400 &&
                <div className="fileContentIconContainer">
                  {icon}
                </div> */
                }

                <Typography component="p" align="center" className="text">
                  {node.name}
                </Typography>
              </CardContent>
            </Tooltip>
          </Card>
      }
    </Fragment>
  );
};

Element.propTypes = {
  node: PropTypes.object.isRequired,
  isFolder: PropTypes.bool.isRequired,
  selected: PropTypes.bool,
  toggleSelect: PropTypes.bool,
};

Element.defaultProps = {
  selected: false,
  toggleSelect: false,
};

export default (Element);
