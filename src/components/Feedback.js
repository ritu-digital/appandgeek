import React from 'react';
import '../Feedback.css';
import Divider from '@material-ui/core/Divider';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
// https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
// https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80
// https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80

const Feedback = () => {
  return (
    <>
      <Divider
        variant='middle'
        light={true}
        style={{ margin: '0 4rem', color: 'rgba(224, 221, 221, 0.85)' }}
      />
      <div className='feedback'>
        <div className='feedback__quoteIcon'>
          <FormatQuoteIcon style={{ fontSize: '5rem', color: '#009CDE' }} />
        </div>
        <h4 style={{ fontSize: '1.8rem' }}>What our customers say about us</h4>
        <p>Don’t believe what we say. Believe our customers!</p>
      </div>
      <div className='feedback__container'>
        <div className='feedback__containerReview'>
          <Paper
            variant='outlined'
            square
            style={{ width: '330px', height: '330px' }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            laborum deserunt,
            <span style={{ fontWeight: '600' }}> AppandGeek</span>
            exercitationem dolorem ex quam commodi beatae numquam? Commodi,
            minus aliquid harum non atque doloremque nemo tempora modi dolor
            perferendis eos ab. Eum, omnis? Doloribus harum deleniti animi
            quasi.
          </Paper>
          <div className='feedback__avatar'>
            <Avatar
              alt='Remy Sharp'
              src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              style={{ width: '55px', height: '55px' }}
            />
            <div className='feedback__avatarContent'>
              <h5 style={{ fontSize: '15px' }}>John Smith</h5>
              <p style={{ fontSize: '13px' }}>Starbox</p>
            </div>
          </div>
        </div>
        <div className='feedback__containerReview'>
          <Paper
            variant='outlined'
            square
            style={{ width: '330px', height: '330px', marginTop: '2.7rem' }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            eveniet officiis consequatur.
            <span style={{ fontWeight: '600' }}> AppandGeek</span> nisi quisquam
            vero ut architecto repellendus dolores similique tempore. Repellat
            provident fugiat in ratione itaque natus, corrupti, recusandae sint
            aut, veniam molestiae.
          </Paper>
          <div className='feedback__avatar'>
            <Avatar
              alt='Remy Sharp'
              src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              style={{ width: '55px', height: '55px' }}
            />
            <div className='feedback__avatarContent'>
              <h5 style={{ fontSize: '15px' }}>John Smith</h5>
              <p style={{ fontSize: '13px' }}>Starbox</p>
            </div>
          </div>
        </div>

        <div className='feedback__containerReview'>
          <Paper
            variant='outlined'
            square
            style={{ width: '330px', height: '330px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eos
            quis est. Debitis iusto eveniet quasi nulla. Ipsam quam vel iure
            accusamus fugit quibusdam consequatur possimus numquam facere fuga
            eveniet asperiores esse{' '}
            <span style={{ fontWeight: '600' }}>AppandGeek</span>
            laudantium, tempora minima! Aperiam, doloribus debitis?
          </Paper>
          <div className='feedback__avatar'>
            <Avatar
              alt='Remy Sharp'
              src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              style={{ width: '55px', height: '55px' }}
            />
            <div className='feedback__avatarContent'>
              <h5 style={{ fontSize: '15px' }}>John Smith</h5>
              <p style={{ fontSize: '13px' }}>Starbox</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
