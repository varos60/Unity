using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    public bool ground = true;
    bool down = false;
    Animator animator;
    Rigidbody2D rb;
    public float jumpForce = 375f;
    public float fallMultiplier = 2.5f;
    public float lowJumpMultiplier = 2f;

    void Awake()
    {
        animator = GetComponent<Animator>();
        rb = GetComponent<Rigidbody2D>();
    }

    void FixedUpdate()
    {
        Begin();
        Jump();
        FlowJump();
        Down();
        Debug.Log(rb.velocity);
    }

    void Begin()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (GameController.run == false && GameController.die == false)
            {
                GameController.run = true;
                animator.SetBool("Run", GameController.run);
            }
        }            
    }

    void Down()
    {
        if (Input.GetKeyDown(KeyCode.DownArrow))
        {
            if (GameController.run == true && GameController.die == false && ground == true && down == false)
            {
                down = true;
                animator.SetBool("Down", down);
            }
        }
        else if (!Input.GetKey(KeyCode.DownArrow))
        {
            if (GameController.run == true && GameController.die == false && ground == true && down == true)
            {
                down = false;
                animator.SetBool("Down", down);
            }
        }
    }

    void Jump()
    {
        if (Input.GetKey(KeyCode.Space))
        {
            if (GameController.run == true && GameController.die == false && ground == true)
            {                
                ground = false;                               
                rb.velocity = Vector2.up * jumpForce * Time.deltaTime;
                animator.SetBool("Ground", ground);
            }
        }
    }

    void FlowJump()
    {
        if (rb.velocity.y < 0)
        {            
            rb.velocity += Vector2.up * Physics2D.gravity.y * (fallMultiplier) * Time.deltaTime;
        }
        else if (rb.velocity.y > 0 && !Input.GetKey(KeyCode.Space))
        {            
            rb.velocity += Vector2.up * Physics2D.gravity.y * (lowJumpMultiplier) * Time.deltaTime;
        }
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag != "Enemy")
        {
            ground = true;
            animator.SetBool("Ground", ground);            
        }
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.tag == "Enemy")
        {
            GameController.die = true;
            animator.SetBool("Die", GameController.die);
            rb.velocity = Vector2.zero;
            rb.gravityScale = 0;
        }
    }
}
