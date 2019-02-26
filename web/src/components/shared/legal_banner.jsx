/*
 * Postfacto, a free, open-source and self-hosted retro tool aimed at helping
 * remote teams.
 *
 * Copyright (C) 2016 - Present Pivotal Software, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 *
 * it under the terms of the GNU Affero General Public License as
 *
 * published by the Free Software Foundation, either version 3 of the
 *
 * License, or (at your option) any later version.
 *
 *
 *
 * This program is distributed in the hope that it will be useful,
 *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *
 * GNU Affero General Public License for more details.
 *
 *
 *
 * You should have received a copy of the GNU Affero General Public License
 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import types from 'prop-types';

export default class LegalBanner extends React.Component {
  static propTypes = {
    config: types.shape({
      terms: types.string.isRequired,
      privacy: types.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.okClicked = this.okClicked.bind(this);
  }

  okClicked() {
  }

  shouldHide() {
    return true;
  }

  render() {
    const {config} = this.props;

    if (this.shouldHide()) {
      return null;
    }

    return (
      <div className="banner" style={{display: 'flex'}}>
        <div className="terms-text">
          By accessing and using Postfacto, you agree to our
          {' '}<a href={config.terms} target="_blank" rel="noopener noreferrer">Terms of Use</a> and
          {' '}<a href={config.privacy} target="_blank" rel="noopener noreferrer">Privacy Policy</a> and
          use of cookies
        </div>
        <button className="button ok-button" type="button" onClick={this.okClicked}>OK</button>
      </div>
    );
  }
}
